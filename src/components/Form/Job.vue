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
                  upload-type="Logo"
                  text-color="white"
                  multiple="false"
                  default-image="/statics/LogoUpload.png"
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
              <y-job-show-categories :job="job"/>
              <y-photo-upload
                color="transparent"
                default-image="/statics/HeaderUpload.jpg"
                upload-type="Header Image"
                v-model="job.headerImage"
              />
              <q-editor
                style="margin-top: 25px;"
                v-model="job.description"
                :dense="$q.screen.gt.md"
                min-height="4rem"
                :toolbar="toolbar"
              />

              <q-input borderless v-model="job.searching" />
              <h1>{{ job.title }}</h1>
              <div class="col-md-6">
                <q-input class="text-h6" borderless v-model="job.tasksTitle" />
                <q-editor
                  v-model="job.tasksText"
                  :toolbar="toolbar"
                  min-height="5rem"
                />
              </div>
              <div class="col-md-6">
                <q-input class="text-h6" v-model="job.qualificationsTitle" />
                <q-editor
                  v-model="job.qualificationsText"
                  :toolbar="toolbar"
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
                  :toolbar="toolbar"
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
                  :toolbar="toolbar"
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
            <div>
              <q-img :src="job.organizationLogo" />
            </div>
          </div>
          <div class="col-9">
            <h3 class="preview">{{ job.organization }}</h3>
            <h1 class="previewJobTitle">{{ job.title }}</h1>

            <br clear="all" />
          </div>
          <y-job-show-categories :job="job"/>
          <div class="col-12">
            <q-img :src="job.headerImage" />
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
.content {
  padding: 20px;
}
</style>

<script lang="javascript">
import YPhotoUpload from './PhotoUpload.vue'
import YJobShowCategories from './JobShowCategories.vue'

export default {
  name: 'Job',
  props: ['job'],
  data () {
    return {
      toolbar: [
        ['left', 'justify'],
        ['bold', 'italic'],
        ['token', 'hr', 'link'],
        ['quote', 'unordered', 'ordered'],
        ['undo', 'redo']
      ],
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
    YPhotoUpload,
    YJobShowCategories
  }
}
</script>
