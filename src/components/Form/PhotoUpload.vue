<template>
  <div>
    <q-uploader
      style="height: 18rem;"
      class="uploaderBox"
      url="http://localhost:4444/upload"
      flat
      :multiple="multiple"
      color="light-blue-1"
      text-color="grey-9"
      field-name="image"
      :max-total-size="maxTotalSize"
      @added="setImage"
    >
      <template v-slot:header="scope">
        <q-card flat>
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
          <div class="text-subtitle2 flex no-wrap">
            <div class="upload-header">
              {{textSelectFile}}
              <div class="q-uploader__subtitle">
                {{ scope.uploadSizeLabel }} /
                {{ scope.uploadProgressLabel }}
              </div>
            </div>

            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
              <q-uploader-add-trigger />
              <q-tooltip>{{textToolTip}}</q-tooltip>
            </q-btn>
            <q-btn
              v-if="scope.canUpload"
              icon="cloud_upload"
              @click="scope.upload"
              round
              dense
              flat
            >
              <q-tooltip>Upload Files</q-tooltip>
            </q-btn>
          </div>
        </q-card>
      </template>

      <template v-slot:list="scope">
        <div>
          <q-card flat style="padding:0; border: 2px dashed #ccc;">
            <div v-if="scope.queuedFiles.length == 0">
              <q-img style="width: 100%; min-height: 7rem" :src="defaultImage" />
            </div>
            <div v-else>
              <div v-for="file in scope.files" :key="file.name">
                <q-img :src="cropImg ? cropImg : file.__img.src" style="width: 100%; min-height: 7rem">
                  <q-btn icon="delete" @click="scope.removeQueuedFiles" round dense flat>
                    <q-tooltip>{{$t('Clear')}}</q-tooltip>
                  </q-btn>

                  <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                  <div class="text-subtitle2 absolute-bottom text-center">
                    <div class="q-uploader__subtitle">
                      {{ scope.uploadSizeLabel }} /
                      {{ scope.uploadProgressLabel }}
                    </div>
                  </div>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="scope.upload"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Upload</q-tooltip>
                  </q-btn>
                  <q-btn round icon="edit" dense flat @click="cropperDialog = true">
                    <q-tooltip>Edit</q-tooltip>
                  </q-btn>
                </q-img>
              </div>
              <q-dialog seamless v-model="cropperDialog">
                <q-card>
                  <q-card-section>
                    <vue-cropper
                      ref="cropper"
                      :src="imgSrc"
                      alt="Source Image"
                      :cropmove="cropImage"
                    ></vue-cropper>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions>
                    <q-btn icon="crop" flat color="primary" @click="cropImage"></q-btn>
                    <q-btn icon="redo" flat color="primary" @click="rotate(-90)"></q-btn>
                    <q-btn icon="undo" flat color="primary" @click="rotate(90)"></q-btn>
                    <q-btn flat color="primary" v-close-popup>OK</q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </template>
    </q-uploader>
  </div>
</template>

<script lang="javascript">
import VueCropper from 'vue-cropperjs'

export default {
  name: 'PhotoUpload',
  props: ['color', 'default-image', 'multiple', 'upload-type'],
  data () {
    return {
      maxTotalSize: 2048000,
      cropperDialog: false,
      imgSrc: null,
      cropImg: null,
      image: null
    }
  },
  components: {
    VueCropper
  },
  methods: {
    getCropBoxData () {
      this.image = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4)
    },
    getData () {
      this.image = JSON.stringify(this.$refs.cropper.getData(), null, 4)
    },
    move (offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY)
    },
    reset () {
      this.$refs.cropper.reset()
    },
    rotate (deg) {
      this.$refs.cropper.rotate(deg)
    },
    setCropBoxData () {
      if (!this.image) return
      this.$refs.cropper.setCropBoxData(JSON.parse(this.image))
    },
    setData () {
      if (!this.image) return
      this.$refs.cropper.setData(JSON.parse(this.image))
    },
    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    setImage (files) {
      const file = files[0]
      if (!file.type) {
        return false
      }
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file')
        return false
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = event => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      }
      else {
        alert('Sorry, FileReader API not supported')
      }
    }
  },
  computed: {
    textSelectFile () {
      if (!this.uploadType) {
        console.log('was jezzt?')
        return this.$t('select file', { do: this.$t('Select'), what: 'File' })
      }
      return this.$t('select file', {
        do: this.$t('Select'),
        what: this.$t(this.uploadType)
      })
    },
    textToolTip () {
      if (!this.uploadType) {
        return this.$t('select file', { do: this.$t('Select'), what: 'File' })
      }
      return this.$t('select file', {
        do: this.$t('Select'),
        what: this.$t(this.uploadType)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.uploaderBox
  width: 100%
.q-uploader__list.scroll
  padding: 0 !important
.q-uploader__title
    font-size: 13px !important

.upload-header
  margin-left: 10px
  color: secondary
  width: 100%

</style>
