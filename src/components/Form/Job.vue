<template>
  <q-splitter v-model="splitterModel" style="height: 400px;">
    <template v-slot:before>
      <form @change="emitJobDescription">
        <div class="q-pa-md">
          <q-card class="col-md-3">
            <q-card-section>
              <div class="job">
                <y-photo-upload
                  color="transparent"
                  uploader-style="background: url(/statics/HeaderUpload.png) center no-repeat;  padding: 0px; border: 3px dashed gray;"
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
        </div>
      </form>
    </template>

    <template v-slot:after>
      <div class="q-pa-md">
        <div>
          <p v-html="job.description"></p>
        </div>
        <div>{{ job.searching }}</div>
        <div class>
          <h1>{{ job.title }}</h1>
          <div>{{ job.contactTitle }}</div>
          <div v-html="job.contactText"></div>
        </div>
      </div>
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
