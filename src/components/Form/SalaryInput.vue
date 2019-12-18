<template>
  <form
    class="address"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitSalary"
  >
    <div class="row q-gutter-xs">
      <q-input
        outlined
        type="Salary"
        label="Gehaltsvorstellung"
        lazy-rules
        v-model="salary.value"
        v-currency
      />
      <q-select
        style="min-width:100px"
        v-model="salary.currency"
        outlined
        :value="salary.currenty"
        :options="currencyOptions"
        label="Währung"
      />
      <q-select
        style="min-width:100px"
        v-model="salary.period"
        outlined
        :value="salary.period"
        :options="periodOptions"
        label="Zeitraum"
      />
    </div>
  </form>
</template>

<script lang="javascript">

import { CurrencyDirective } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
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
      periodOptions: [
        'jährlich', 'monatlich', 'stündlich'
      ],
      currencyOptions: [
        'EUR', 'USD', 'CHF'
      ],
      locale: undefined
    }
  },
  directives: {
    currency: CurrencyDirective
  },
  methods: {
    emitSalary (event) {
      this.$emit('Salary', this.salary)
    }
  }
}
</script>
