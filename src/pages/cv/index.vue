<template>
  <q-page padding>
    <form>
      <div class="row q-col-gutter-md">
        <div class="col-md-4">
          <import-profile
            @profile="payload => this.$emit('profile', payload)"
          />
        </div>
        <div class="col-md-4">
          <q-card class="full-height">
            <q-card-section>
              <div class="text-h6">Visibility</div>
              <div class="text-subtitle2">define visibility of your data</div>
            </q-card-section>
            <q-card-actions align="around"> </q-card-actions>
          </q-card>
        </div>
        <div class="col-md-4">
          <q-card class="full-height">
            <q-card-section>
              <div class="text-h6">Europass</div>
              <div class="text-subtitle2">import an europass</div>
            </q-card-section>
            <q-card-actions align="around">
              <div class="full-width">
                <q-file
                  :value="files"
                  @input="updateFiles"
                  label="Pick files"
                  outlined
                  multiple
                  :clearable="!isUploading"
                  style="max-width: 400px"
                >
                  <template v-slot:file="{ index, file }">
                    <q-chip
                      class="full-width q-my-xs"
                      :removable="
                        isUploading && uploadProgress[index].percent < 1
                      "
                      square
                      @remove="cancelFile(index)"
                    >
                      <q-linear-progress
                        class="absolute-full full-height"
                        :value="uploadProgress[index].percent"
                        :color="uploadProgress[index].color"
                        track-color="grey-2"
                      />

                      <q-avatar>
                        <q-icon :name="uploadProgress[index].icon" />
                      </q-avatar>

                      <div class="ellipsis relative-position">
                        {{ file.name }}
                      </div>

                      <q-tooltip>
                        {{ file.name }}
                      </q-tooltip>
                    </q-chip>
                  </template>

                  <template v-slot:after v-if="canUpload">
                    <q-btn
                      color="primary"
                      dense
                      icon="cloud_upload"
                      round
                      @click="upload"
                      :disable="!canUpload"
                      :loading="isUploading"
                    />
                  </template>
                </q-file>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <br />
      <y-desired-work />
      <buttons />
    </form>
  </q-page>
</template>

<script lang="javascript">
import YDesiredWork from 'components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from 'components/General/Buttons.vue'
import ImportProfile from 'components/Cv/ImportProfile/ImportProfile.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YDesiredWork,
    Buttons,
    ImportProfile
  },
  data () {
    return {
      files: null,
      uploadProgress: [],
      uploading: null
    }
  },

  computed: {
    isUploading () {
      return this.uploading !== null
    },
    canUpload () {
      return this.files !== null
    }
  },
  methods: {
    auth (network) {
      this.$hello(network).login({ scope: 'friends' })
        .then((res) => {
          console.log(res)
        })
    },
    cancelFile (index) {
      this.uploadProgress[index] = {
        ...this.uploadProgress[index],
        error: true,
        color: 'orange-2'
      }
    },

    updateFiles (files) {
      this.files = files
      this.uploadProgress = (files || []).map(file => ({
        error: false,
        color: 'green-2',
        percent: 0,
        icon: file.type.indexOf('video/') === 0
          ? 'movie'
          : (file.type.indexOf('image/') === 0
            ? 'photo'
            : (file.type.indexOf('audio/') === 0
              ? 'audiotrack'
              : 'insert_drive_file'
            )
          )
      }))
      if (files) {
        console.log(files[0].type)
      }
    },

    upload () {
      clearTimeout(this.uploading)
      // const XML_TO_JSON_URL = 'https://europass.cedefop.europa.eu/rest/v1/document/to/json'

      const allDone = this.uploadProgress.every(progress => progress.percent === 1)

      this.uploadProgress = this.uploadProgress.map(progress => ({
        ...progress,
        error: false,
        color: 'green-2',
        percent: allDone === true ? 0 : progress.percent
      }))

      this.__updateUploadProgress()
    },

    __updateUploadProgress () {
      let done = true

      this.uploadProgress = this.uploadProgress.map(progress => {
        if (progress.percent === 1 || progress.error === true) {
          return progress
        }

        const percent = Math.min(1, progress.percent + Math.random() / 10)
        const error = percent < 1 && Math.random() > 0.95

        if (error === false && percent < 1 && done === true) {
          done = false
        }

        return {
          ...progress,
          error,
          color: error === true ? 'red-2' : 'green-2',
          percent
        }
      })

      this.uploading = done !== true
        ? setTimeout(this.__updateUploadProgress, 300)
        : null
    }
  },

  beforeDestroy () {
    clearTimeout(this.uploading)
  }
}
</script>
