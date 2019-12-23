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
                  ['bold', 'italic', 'strike', 'underline'],
                  ['token', 'hr', 'link', 'custom_btn'],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                  ['undo', 'redo']
                ]"
              />

              <q-input borderless v-model="job.searching" />
              <h1>{{ job.title }}</h1>
              <div class="col-md-6">
                <q-input class="text-h6" borderless v-model="job.tasksTitle" />
                <q-editor
                  v-model="job.tasksText"
                  :toolbar="[
                    ['left', 'center', 'right', 'justify'],
                    ['bold', 'italic', 'strike', 'underline'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo']
                  ]"
                  min-height="5rem"
                />
              </div>
              <div class="col-md-6">
                <q-input class="text-h6" v-model="job.qualificationsTitle" />
                <q-editor
                  v-model="job.qualificationsText"
                  :toolbar="[
                    ['left', 'center', 'right', 'justify'],
                    ['bold', 'italic', 'strike', 'underline'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo']
                  ]"
                  min-height="5rem"
                />
              </div>
              <div class="col-md-6">
                <q-input
                  class="text-h6"
                  borderless
                  v-model="job.benefitsTitle"
                />
                <q-editor
                  v-model="job.benefitsText"
                  :toolbar="[
                    ['left', 'center', 'right', 'justify'],
                    ['bold', 'italic', 'strike', 'underline'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo']
                  ]"
                  min-height="5rem"
                />
              </div>
              <div class="col-md-6">
                <q-input
                  class="text-h6"
                  borderless
                  v-model="job.contactTitle"
                />
                <q-editor
                  v-model="job.contactText"
                  :toolbar="[
                    ['left', 'center', 'right', 'justify'],
                    ['bold', 'italic', 'strike', 'underline'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo']
                  ]"
                  min-height="5rem"
                />
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
            <div class="previewData">
              <ul>
                <li>
                  <i aria-hidden="true" class="material-icons q-icon">place</i
                  >{{ job.location }} job.location
                </li>
                <li>
                  <i aria-hidden="true" class="material-icons q-icon">work</i
                  >Feste Anstellung
                </li>
                <li>
                  <i aria-hidden="true" class="material-icons q-icon"
                    >schedule</i
                  >Vollzeit
                </li>
                <li>
                  <i aria-hidden="true" class="material-icons q-icon"
                    >calendar_today</i
                  >Erschienen: vor 1 Tag
                </li>
              </ul>
            </div>
            <br clear="all" />
          </div>
          <div class="HeaderImage col-12">
            <img :src="job.headerImage" />
          </div>

          <q-card-section>
            <div class="content">
              <div>
                <p v-html="job.description"></p>
              </div>

              <div>{{ job.searching }}</div>
              <h1 class="previewJobTitle">{{ job.title }}</h1>
              <h6>{{ job.tasksTitle }}</h6>
              <div v-html="job.tasksText"></div>
              <h6>{{ job.qualificationsTitle }}</h6>
              <div v-html="job.qualificationsText"></div>
              <h6>{{ job.benefitsTitle }}</h6>
              <div v-html="job.benefitsText"></div>

              <h6>{{ job.contactTitle }}</h6>
              <div v-html="job.contactText"></div>
            </div>
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
h6 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}
.text-h6 {
  font-size: 1.1rem;
}
.preview {
  margin-top: 0;
  margin-bottom: 0;
}
.previewJobTitle {
  margin-top: 30px;
  margin-bottom: 0;
}
.previewData {
  text-align: left;
  font-size: 16px;
}
.previewData ul {
  padding: 20px 0;
  margin: 0;
  list-style: none;
}
.previewData ul li {
  display: inline;
  padding-left: 0px;
  padding-right: 15px;
}
.previewData .material-icons {
  font-size: 20px;
  opacity: 0.7;
  padding-right: 5px;
}
.HeaderImage {
  background: url(/statics/HeaderUpload.jpg) center no-repeat;
  padding: 5%;
}
.LogoImage {
  background: url(/statics/PhotoUpload.png) center no-repeat;
  color: #fff !important;
  padding: 30px;
}
.content {
  padding: 20px;
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
