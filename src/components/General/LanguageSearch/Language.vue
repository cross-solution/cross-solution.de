<template>
<q-select
        outlined
        v-model="language"
        :options="options"
        :label="label"
        color="primary"
        clearable
        use-input
        multiple
        @filter="filterFn"
        map-options
        emit-value
        options-selected-class="secondary"
      >
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            <q-item-section avatar>
              <q-icon :name="`img:svg/${scope.opt.icon}.svg`" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
              <q-item-label caption>{{ scope.opt.value }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle v-model="language" :val="scope.opt.value" />
            </q-item-section>
          </q-item>
        </template>
      </q-select>
</template>

<script language="javascript">
import ISO6391 from 'iso-639-1'

var options = []
var codes = [
  'de', 'en', 'fr', 'it', 'es',
  'pl', 'nl', 'ja', 'bg', 'cs',
  'tr', 'sl', 'sv', 'fi', 'hu',
  'ro', 'pt', 'nb', 'mk', 'mt',
  'is', 'et', 'sr', 'da', 'el',
  'hr', 'lt', 'lv'

]

options = codes.map(code => {
  return {
    'icon': code,
    'label': ISO6391.getName(code),
    'value': ISO6391.getNativeName(code)
  }
})

export default {
  props: ['native'],
  data () {
    return {
      model: [],
      language: null,
      options: options.sort(function (a, b) {
        if (a.label < b.label) {
          return -1
        }
        if (a.label > b.label) {
          return 1
        }
        return 0
      }),
      codes: codes }
  },
  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = options.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  computed: {
    label: function () {
      if (this.native === '1') {
        return this.$t('Native language')
      }
      return this.$t('Foreign languages')
    }
  }
}
</script>
