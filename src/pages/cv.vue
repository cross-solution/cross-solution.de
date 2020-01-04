<template>
  <q-page padding>
    <form class="q-pa-md">
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
import YDesiredWork from '../components/Form/DesiredWork.vue'
import YWorkExperience from '../components/Cv/WorkExperience/List.vue'
import YEducation from '../components/Form/Education.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YDesiredWork,
    YWorkExperience,
    YEducation
  },

  data () {
    return {
      selection: ['Festeinstellung'],
      salary: '',
      time: '',
      fixed: '',
      left: true,
      drawer: true
    }
  },
  methods: {
    submitting () {}
  }
}
</script>
