<template>
  <q-page padding>
    <form class="q-pa-md">
      <y-work-experience />
    </form>
  </q-page>
</template>

<script lang="javascript">
import YWorkExperience from '../../components/Cv/WorkExperience/List.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YWorkExperience
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
