<template>
  <form
    class="desired-work"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitDesiredWork"
  >
    <div class="row">
      <h2>Gewünschte Tätigkeit</h2>
      <strong>Gewünschte Art der Anstellung</strong>
      <div style="background: #EEF4FB; padding: 8px;">
        <q-toggle
          color="primary"
          label="Zeitarbeit"
          v-model="selection"
          val="Zeitarbeit"
          value="Zeitarbeit"
        />
        <q-toggle
          color="primary"
          label="Festanstellung"
          v-model="selection"
          val="Festanstellung"
          value="Festanstellung"
        />
        <q-toggle
          color="primary"
          label="Projektarbeit"
          v-model="selection"
          val="Projektarbeit"
          value="Projektarbeit"
        />
        <q-toggle
          color="primary"
          label="Freie Mitarbeit"
          v-model="selection"
          val="Freie Mitarbeit"
          value="Freie Mitarbeit"
        />
        <q-toggle
          color="primary"
          label="Praktikum"
          v-model="selection"
          val="Praktikum"
          value="Praktikum"
        />
      </div>
      <div c class="col-lg-12 col-sm-6 col-xs-12">
        <q-input
          outlined
          type="DesiredPosition"
          label="Angestrebte Tätigkeit"
          hint="wie möchtest Du dich entwickeln?"
          lazy-rules
        />
      </div>

      <div class="col-lg-12 col-sm-6 col-xs-12">
        <y-search-region
          label="Gewünschter Arbeitsort/Bundesland"
          v-model="location"
        />
      </div>
      <div class="col-lg-12 col-sm-6 col-xs-12">
        <q-input
          outlined
          type="Traveling"
          label="Reisebereitschaft"
          hint=""
          lazy-rules
        />
      </div>
      <y-salary-input />
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
    salary: {
      default: () => ({
        period: 'monatlich',
        value: 1234.5,
        currency: 'EUR'
      })
    }
  },
  data () {
    return {
      selection: ['Festeinstellung'],
      locale: undefined,
      time: '',
      fixed: '',
      location: ''
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
