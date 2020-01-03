<template>
  <div>
  <div
    v-for="workExperience in workExperiencesDirect"
    v-bind:key="workExperience.id"
    :work-experience="workExperience">
    <work-experience :item="workExperience"/>
  </div>
  </div>
</template>

<script lang="javascript">

import { mapGetters } from 'vuex'
import WorkExperience from './WorkExperience.vue'

export default {
  name: 'workExperiences',
  data () {
    return {
      locale: undefined,
      date: null,
      location: ''
    }
  },
  components: {
    WorkExperience
  },
  computed: {
    ...mapGetters(['cv.workExperiences']),
    workExperiencesGet () {
      console.log(this.$store)
      return this.$store.getters.cv.workExperiences
    },
    workExperiencesDirect () {
      return this.$store.state.cv.workExperiences
    }
  }
}
</script>
