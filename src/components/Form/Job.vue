<template>
  <q-splitter v-model="splitterModel" style="height: 400px;">
    <template v-slot:before>
      <form @change="emitJobDescription">
        <q-card>
          <q-card-section>
            <div class="job">
              <div class="row q-col-gutter-sm">
                <y-photo-upload class="col-2"
                color="transparent"
                uploader-style="background: url(/statics/HeaderUpload.png) center no-repeat;  padding: 0px; border: 3px dashed gray;"
                v-model="job.organizationLogo"
              />
              <div class="col-10">
                <h3>{{job.organization}}</h3>
                <h1>{{ job.title }}</h1>
              </div>
            </div>
              <y-photo-upload
                color="transparent"
                uploader-style="background: url(/statics/HeaderUpload.png) center no-repeat;  padding: 0px; border: 3px dashed gray;"
                v-model="job.headerImage"
              />
              <q-editor
                v-model="job.description"
                :dense="$q.screen.gt.md"
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
                <q-input borderless v-model="job.contactTitle" />
                <q-editor v-model="job.contactText" min-height="5rem" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </form>
    </template>

    <template v-slot:after>
      <q-card class="my-card">
        <h3>{{job.organization}}</h3>
        <h1>{{ job.title }}</h1>
        <img :src="job.headerImage"/>
        <q-card-section>
        <div>
          <p v-html="job.description"></p>
        </div>
        <div>{{ job.searching }}</div>

          <h6>{{ job.contactTitle }}</h6>
          <div v-html="job.contactText"></div>
        </q-card-section>
      </q-card>
    </template>
  </q-splitter>
</template>

<style lang="scss"></style>

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
