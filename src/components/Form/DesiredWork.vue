<template>
  <form
    class="desired-work"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitDesiredWork"
  >
    <h2>Gewünschte Tätigkeit</h2>
    <div class="row q-col-gutter-md">
      <div c class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <q-input
          outlined
          type="DesiredPosition"
          v-model="desiredWork.jobTitle"
          label="Angestrebte Tätigkeit"
          lazy-rules
        />
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <y-search-region
          label="Gewünschter Arbeitsort/Bundesland"
          v-model="desiredWork.location"
        />
      </div>

      <div c class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <q-select
          label="Art der Anstellung"
          transition-show="flip-up"
          transition-hide="flip-down"
          outlined
          multiple
          v-model="desiredWork.jobType"
          :options="jobTypeOptions"
          style="width: 100%"
        />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <q-select
          label="Pensum"
          outlined
          transition-show="flip-up"
          transition-hide="flip-down"
          multiple
          v-model="desiredWork.pensum"
          :options="pensumOptions"
          style="width: 100%"
        />
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <q-input
          outlined
          type="Traveling"
          label="Reisebereitschaft"
          v-model="desiredWork.willingnessToTravel"
          lazy-rules
        />
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <y-salary-input />
      </div>
    </div>
  </form>
</template>

<script lang="javascript">

import { CurrencyDirective } from 'vue-currency-input'
import YSearchRegion from '../SearchRegion.vue'
import YSalaryInput from './SalaryInput.vue'

export default {
  name: 'DesiredWork',
  props: {
    desiredWork: {
      default: () => ({
        jobTitle: '',
        pensum: null,
        location: '',
        jobType: null,
        willingnessToTravel: ''
      })
    }
  },
  data () {
    return {
      locale: undefined,
      time: '',
      fixed: '',
      location: '',
      jobTypeOptions: ['Festanstellung', 'Freie Mitarbeit', 'Praktikum', 'Ausbildung'],
      pensumOptions: ['Vollzeit', 'Teilzeit', 'Schichtbetrieb']
    }
  },
  directives: {
    currency: CurrencyDirective
  },
  components: {
    YSearchRegion,
    YSalaryInput
  },
  methods: {
    emitDesiredWork (event) {
      this.$emit('DesiredWork', this.salary)
    }
  }
}
</script>
