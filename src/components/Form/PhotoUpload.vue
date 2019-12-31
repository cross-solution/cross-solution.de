<template>
  <div>
    <q-btn
      dense
      flat
      icon="edit"
      text-color="grey-6"
      @click="cropperDialog = true"
    />
    <q-uploader
      style="border: 2px dashed #ccc;"
      class="text-center uploaderBox"
      url="http://localhost:4444/upload"
      color="transparent"
      flat
      ref="input"
      field-name="image"
      text-color="white"
      :max-total-size="maxTotalSize"
      @added="setImage"
    >
      <template v-slot:header="scope">
        <q-card v-if="scope.queuedFiles.length == 0" flat>
          <q-img :src="defaultImage">
            <q-card-section>
              <q-btn
                v-if="scope.queuedFiles.length > 1"
                icon="clear_all"
                @click="scope.removeQueuedFiles"
                round
                dense
                flat
              >
                <q-tooltip>Clear All</q-tooltip>
              </q-btn>

              <q-btn
                v-if="scope.uploadedFiles.length > 0"
                icon="done_all"
                @click="scope.removeUploadedFiles"
                dense
                flat
              >
                <q-tooltip>Remove Uploaded Files</q-tooltip>
              </q-btn>
              <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
              <div class="col">
                <div class="q-uploader__title">
                  Bitte laden Sie Ihr Foto hoch.
                </div>
                <div class="q-uploader__subtitle">
                  {{ scope.uploadSizeLabel }} /
                  {{ scope.uploadProgressLabel }}
                </div>
              </div>
              <q-btn
                v-if="scope.canAddFiles"
                type="a"
                icon="add_box"
                round
                dense
                flat
              >
                <q-uploader-add-trigger />
                <q-tooltip>Foto auswählen</q-tooltip>
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

              <q-btn
                v-if="scope.isUploading"
                icon="clear"
                @click="scope.abort"
                round
                dense
                flat
              >
                <q-tooltip>Abort Upload</q-tooltip>
              </q-btn>
            </q-card-section>
          </q-img>
        </q-card>
      </template>

      <template v-slot:list="scope">
        <div v-if="scope.queuedFiles.length > 0">
        <q-list separator v-if="multiple">
          <q-item v-for="file in scope.files" :key="file.name">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                Status: {{ file.__status }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              v-if="file.__img"
              thumbnail
              class="gt-xs"
            >

            </q-item-section>

            <q-item-section top side>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="scope.removeFile(file)"
              />
              <q-btn
                dense
                flat
                icon="edit"
                text-color="grey-6"
                @click="this.ropperDialog = true"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-card v-else flat>
          <div v-for="file in scope.files" :key="file.name">
            XXXX
          <q-img :src="file.__img.src">
            <q-card-section>
              <q-btn
                icon="clear_all"
                @click="scope.removeQueuedFiles"
                round
                dense
                flat
              >
                <q-tooltip>{{$t('Clear')}}</q-tooltip>
              </q-btn>

              <q-btn
                icon="done_all"
                @click="scope.removeUploadedFiles"
                dense
                flat
              >
                <q-tooltip>Remove Uploaded Files</q-tooltip>
              </q-btn>
              <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
              <div class="col">
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
                <q-tooltip>Upload Files</q-tooltip>
              </q-btn>

              <q-btn
                v-if="scope.isUploading"
                icon="clear"
                @click="scope.abort"
                round
                dense
                flat
              >
                <q-tooltip>Abort Upload</q-tooltip>
              </q-btn>
              <q-btn
                dense
                flat
                icon="edit2"
                text-color="grey-6"
                @click="this.$root.cropperDialog = true"
              />
            </q-card-section>
          </q-img>
          </div>
        </q-card>
        </div>
      </template>

    </q-uploader>

    <q-dialog seamless v-model="cropperDialog">
      <q-card>
        <q-card-section>
          <vue-cropper
            ref="cropper"
            :src="imgSrc"
            alt="Source Image"
            :cropmove="cropImage"
          >
          </vue-cropper>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
            icon="fas fa-crop-alt"
            flat
            color="primary"
            @click="cropImage"
          ></q-btn>
          <q-btn icon="redo" flat color="primary" @click="rotate(-90)"></q-btn>
          <q-btn icon="undo" flat color="primary" @click="rotate(90)"></q-btn>
          <q-btn flat color="primary" v-close-popup>OK</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="javascript">

import VueCropper from 'vue-cropperjs'

export default {
  name: 'PhotoUpload',
  props: ['color', 'default-image', 'multiple'],
  mixins: [VueCropper],
  data () {
    return {
      maxTotalSize: 2048000,
      cropperDialog: false,
      imgSrc: '/statics/PhotoUpload.png',
      cropImg: '',
      image: null
    }
  },
  components: {
    VueCropper
  },
  methods: {
    flipX () {
      const dom = this.$refs.flipX
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleX(scale)
      dom.setAttribute('data-scale', scale)
    },
    flipY () {
      const dom = this.$refs.flipY
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleY(scale)
      dom.setAttribute('data-scale', scale)
    },
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
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
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
  }

}
</script>

<style scoped>
.q-card {
  background: transparent !important;
}
.uploaderBox {
  width: 100%;
}
.q-uploader__list {
  background: transparent;
}
</style>
