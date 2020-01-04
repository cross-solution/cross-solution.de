<template>
  <form name="dateRange"
    class="row date-range q-col-gutter-xs"
    @change="emitDateRange"
  >
      <q-input
        class="col-4"
        outlined
        :minimal="minimal"
        :landscape="landscape"
        v-model="start"
        :rules="['start']"
        :label="$t('Start')"
        @change="emitDateRange"
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
                :title="$t('Start')"
                :minimal="minimal"
                :landscape="landscape"
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
        :minimal="minimal"
        :landscape="landscape"
        clearable
        v-model="end"
        :rules="['end']"
        :label="$t('End')"
        @change="emitDateRange"
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
                :title="$t('End')"
                :minimal="minimal"
                :landscape="landscape"
                @input="() => $refs.qDateEndProxy.hide()"
                default-view="Years"
                @change="emitDateRange"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-checkbox
        class="col-2"
        v-model="ongoing"
        :label="$t('Ongoing')"
        @input="emitDateRange"
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
      ongoing: false,
      minimal: this.$q.screen.lt.sm,
      landscape: this.$q.screen.gt.xs
    }
  },
  methods: {
    emitDateRange (event) {
      console.log('Emit DateRange: ' + event)
      this.$emit('DateRange', {
        start: this.start,
        end: this.end,
        ongoing: this.ongoing
      })
    }
  }
}
</script>
