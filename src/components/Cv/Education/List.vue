<template>
  <div>
    <h1>{{$t('Education')}}</h1>
  <div
    v-for="workExperience in workExperiences"
    v-bind:key="workExperience.id"
    :work-experience="workExperience">
    <work-experience :item="workExperience" />
  </div>
  <q-btn icon="create" @click="addWorkExperience"/>
  </div>
</template>

<script lang="javascript">

import WorkExperience from './Education.vue'
import WorkExperiences from '../../../store/models/WorkExperiences'

export default {
  name: 'workExperiences',
  data () {
    return {
      date: null
    }
  },
  components: {
    WorkExperience
  },
  methods: {
    addWorkExperience () {
      WorkExperiences.insert({
        data: [
          {
            position: '',
            organization: '',
            description: ''
          }
        ]
      })
    }
  },
  computed: {
    workExperiences () {
      return WorkExperiences.all()
    }
  }
}
</script>
