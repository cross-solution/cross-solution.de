<template>
  <form
    class="work-experience"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitWorkExperience"
  >
    <h2>Berufserfahrung</h2>
    <div class="row q-col-gutter-md">
      <q-input
        class="col-12"
        outlined
        v-model="workExperience.jobTitle"
        label="Position"
      />
      <q-input
        class="col-12"
        outlined
        v-model="workExperience.organizationName"
        label="Firma/Organization"
      />
      <y-date-range/>
      <q-editor class="col-6"
                v-model="workExperience.description"
                :dense="$q.screen.gt.md"
                min-height="4rem"
                :toolbar="[
                  ['left', 'center', 'right', 'justify'],
                  ['bold', 'italic'],
                  ['quote', 'unordered', 'ordered'],
                  ['undo', 'redo']
                ]"
              />
    </div>
  </form>
</template>

<script lang="javascript">

import YDateRange from './DateRange.vue'

export default {
  name: 'workExperience',
  props: {
    workExperience: {
      default: () => ({
        jobTitle: '',
        organizationName: '',
        description: '',
        dateRange: {
          start: null,
          end: null,
          ongoing: false
        }
      })
    }
  },
  data () {
    return {
      locale: undefined,
      date: null,
      location: ''
    }
  },
  components: {
    YDateRange
  },
  methods: {
    emitWorkExperience (event) {
      this.$emit('workExperience', this.salary)
    }
  }
}
</script>
