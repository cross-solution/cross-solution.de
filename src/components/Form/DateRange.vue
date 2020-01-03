<template>
  <form
    class="row date-range q-col-gutter-xs"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitDateRange"
  >
      <q-input
        class="col-4"
        outlined
        :locale="$q.lang.getLocale()"
        v-model="start"
        :rules="['start']"
        :label="$t('Start')"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateStartProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="start"
                @input="() => $refs.qDateStartProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        class="col-4"
        outlined
        :disable="ongoing"
        clearable
        v-model="end"
        mask="date"
        :rules="['end']"
        :label="$t('End')"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateEndProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="end"
                @input="() => $refs.qDateEndProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-checkbox
      class="col-2"
      v-model="ongoing"
      :label="$t('Ongoing')"
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
      start: null,
      end: null,
      ongoing: false
    }
  },
  methods: {
    emitDateRange (event) {
      this.$emit('DateRange', {
        start: this.start,
        end: this.end,
        ongoing: this.ongoing
      })
    }
  }
}
</script>
