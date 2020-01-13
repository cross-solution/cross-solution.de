<template>
  <q-page padding>
    <h1>{{$t('Work Experience')}}</h1>
    <form>
      <work-experience />
    </form>
  </q-page>
</template>

<script lang="javascript">
import WorkExperience from 'components/Cv/WorkExperience/List.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    WorkExperience
  },
  data () {
    return {
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
