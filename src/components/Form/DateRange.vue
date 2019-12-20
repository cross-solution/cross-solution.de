<template>
  <form
    class="row date-range q-col-gutter-xs"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitDateRange"
  >
      <q-input
        class="col-6"
        outlined
        v-model="dateRange.start"
        mask="date"
        :rules="['dateRange.start']"
        label="Beginn"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateStartProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="dateRange.start"
                @input="() => $refs.qDateStartProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        class="col-6"
        outlined
        :disable="dateRange.ongoing"
        clearable
        v-model="dateRange.end"
        mask="date"
        :rules="['dateRange.end']"
        label="Ende"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateEndProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="dateRange.end"
                @input="() => $refs.qDateEndProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-checkbox
      v-model="dateRange.ongoing"
      label="Bis heute"
      />
  </form>
</template>

<script lang="javascript">

export default {
  name: 'DateRangeInput',
  props: {
    dateRange: {
      default: () => ({
        start: null,
        end: null,
        ongoing: true
      })
    }
  },
  data () {
    return {
      locale: undefined
    }
  },
  methods: {
    emitDateRange (event) {
      this.$emit('DateRange', this.dateRange)
    }
  }
}
</script>
