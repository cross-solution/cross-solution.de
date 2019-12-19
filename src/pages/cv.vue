<template>
  <q-page padding>
    <form @submit.prevent="simulateSubmit" class="q-pa-md">
      <div class="row q-col-gutter-x-md">
        <div class="col-md-10 col-xs-12">
          <h2>Grunddaten</h2>
          <y-address />
          <div class="col-lg-12 col-sm-6 col-xs-12" style="margin-top: 21px;">
            <q-input outlined type="country" label="Nationalität" lazy-rules />
          </div>
        </div>
        <div class="col-md-2 col-xs-12">
          <y-photo-upload
            color="transparent"
            uploader-style="background: url(/statics/PhotoUpload.png) center no-repeat;  padding: 0px; border: 3px dashed gray;"
          />
        </div>
      </div>
      <y-desired-work />
      <y-work-experience />
      <y-education />
      <div class="row q-col-gutter-x-md">
        <div class="row justify-end">
          <q-btn
            type="submit"
            label="Speichern"
            flat
            class="q-mt-md"
            color="primary"
          >
          </q-btn>
          <q-btn
            type="submit"
            label="Löschen"
            flat
            class="q-mt-md"
            color="primary"
            style="margin-left: 20px;"
          >
          </q-btn>
        </div>
      </div>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YAddress from '../components/Form/Address.vue'
import YPhotoUpload from '../components/Form/PhotoUpload.vue'
import YDesiredWork from '../components/Form/DesiredWork.vue'
import YWorkExperience from '../components/Form/WorkExperience.vue'
import YEducation from '../components/Form/Education.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YAddress,
    YPhotoUpload,
    YDesiredWork,
    YWorkExperience,
    YEducation
  },

  data () {
    return {
      selection: ['Festeinstellung'],
      locale: undefined,
      salary: '',
      time: '',
      fixed: ''
    }
  },
  methods: {
    submitting () {}
  }
}
</script>
