<template>
  <q-splitter v-model="splitterModel" style="height: 500px">
    <template v-slot:before>
      <form @change="emitJobDescription">
        <q-card>
          <q-card-section>
            <div class="job">
              <div class="row q-col-gutter-sm">
                <y-photo-upload
                  class="col-3"
                  color="transparent"
                  minCanvasWidth="5rem"
                  text-color="white"
                  uploader-style="background: url(/statics/PhotoUpload.png) center no-repeat; color: #fff !important; padding: 0px; border: 2px dashed #ccc;"
                  v-model="job.organizationLogo"
                />
                <div class="col-9">
                  <h3>
                    {{ job.organization }}
                  </h3>
                  <h1>
                    {{ job.title }}
                  </h1>
                </div>
              </div>
              <y-photo-upload
                color="transparent"
                uploader-style="background: url(/statics/HeaderUpload.jpg) center no-repeat;  padding: 5%; border: 2px dashed #ccc;"
                v-model="job.headerImage"
              />
              <q-editor
                style="margin-top: 25px;"
                v-model="job.description"
                :dense="$q.screen.gt.md"
                min-height="4rem"
                :toolbar="[
                  ['left', 'center', 'right', 'justify'],
                  ['bold', 'italic'],
                  ['quote', 'unordered', 'ordered'],
                  ['undo', 'redo']
                ]"
              />

              <q-input borderless v-model="job.searching" />
              <h1>{{ job.title }}</h1>
              <div class="col-md-6">
                <q-input class="text-h6" borderless v-model="job.tasksTitle" />
                <q-editor v-model="job.tasksText" min-height="5rem" />
              </div>
              <div class="col-md-6">
                <q-input class="text-h6" v-model="job.qualificationsTitle" />
                <q-editor v-model="job.qualificationsText" min-height="5rem" />
              </div>
              <div class="col-md-6">
                <q-input
                  class="text-h6"
                  borderless
                  v-model="job.benefitsTitle"
                />
                <q-editor v-model="job.benefitsText" min-height="5rem" />
              </div>
              <div class="col-md-6">
                <q-input
                  class="text-h6"
                  borderless
                  v-model="job.contactTitle"
                />
                <q-editor v-model="job.contactText" min-height="5rem" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </form>
    </template>

    <template v-slot:after>
      <q-card>
        <div class="row q-col-gutter-sm">
          <div class="col-3">
            <div class="LogoImage">
              <img :src="job.headerImage" />
            </div>
          </div>
          <div class="col-9">
            <h3 class="preview">{{ job.organization }}</h3>
            <h1 class="previewJobTitle">{{ job.title }}</h1>
          </div>
          <div class="HeaderImage col-12">
            <img :src="job.headerImage" />
          </div>

          <q-card-section>
            <div>
              <p v-html="job.description"></p>
            </div>
            <div>{{ job.searching }}</div>

            <h6>{{ job.contactTitle }}</h6>
            <div v-html="job.contactText"></div>
          </q-card-section>
        </div>
      </q-card>
    </template>
  </q-splitter>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 400;
}
h3 {
  font-size: 1.5rem;
  color: #555;
}
.preview {
  margin-top: 0;
  margin-bottom: 0;
}
.previewJobTitle {
  margin-top: 0;
  margin-bottom: 0;
}
.HeaderImage {
  background: url(/statics/HeaderUpload.jpg) center no-repeat;
  padding: 5%;
}
.LogoImage {
  background: url(/statics/PhotoUpload.png) center no-repeat;
  color: #fff !important;
  padding: 0px;
}
.q-field__native {
  border: 1px solid #eee;
  background: #eee !important;
  padding: 6px;
}
</style>

<script lang="javascript">
import YPhotoUpload from './PhotoUpload.vue'

export default {
  name: 'Job',
  props: {
    job: {
      default: () => ({
        title: '',
        description: '',
        location: '',
        searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
        contactTitle: 'Kontakt',
        contactText: ''
      })
    }
  },
  data () {
    return {
      splitterModel: 50 // start at 50%
    }
  },
  methods: {
    emitJobDescription (event) {
      console.log('JobDescription', event)
      this.$emit('JobDescription', this.job)
    }
  },
  components: {
    YPhotoUpload
  }
}
</script>
