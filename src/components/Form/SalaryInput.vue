<template>
  <form
    class="address"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitSalary"
  >
    <div class="row q-col-gutter-xs">
      <q-input
        class="col-md-6"
        outlined
        type="Salary"
        :label="$t('Salary expectations')"
        lazy-rules
        v-model="salary.value"
        v-currency
      />
      <q-select
        class="col-3"
        style="min-width:100px"
        v-model="salary.currency"
        outlined
        :value="salary.currenty"
        :options="currencyOptions"
        :label="$t('Currency')"
      />
      <q-select
        class="col-3"
        style="min-width:100px"
        v-model="salary.period"
        outlined
        :value="salary.period"
        :options="periodOptions"
        :label="$t('Period')"
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
        value: '',
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
      ]
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
