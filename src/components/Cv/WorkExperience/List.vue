<template>
  <div>
    <div
      v-for="workExperience in workExperiences"
      v-bind:key="workExperience.id"
      :work-experience="workExperience"
    >
      <work-experience :item="workExperience" @saved="addWorkExperience" />
    </div>
  </div>
</template>

<script lang="javascript">

import WorkExperience from './WorkExperience.vue'
import WorkExperiences from '../../../store/models/WorkExperiences'

const __item = {
  data: [
    {
      position: '',
      start: '',
      organization: '',
      description: ''
    }
  ]
}

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
            start: '',
            end: '',
            ongoing: false,
            organization: '',
            description: ''
          }
        ]
      })
    }
  },
  computed: {
    workExperiences () {
      const items = WorkExperiences.all()
      if (items.length === 0) {
        WorkExperiences.insert(__item)
      }
      return items
    },
    now: function () {
      return Date.now()
    }
  }
}
</script>
