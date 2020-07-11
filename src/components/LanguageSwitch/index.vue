<template>
    <q-select
        color="primary"
        dense
        borderless
        options-dense
        v-model='locale'
        :options="languages"
        @input="setLocale">
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:selected-item="scope">
          <q-icon :name="scope.opt.icon" />
        </template>
    </q-select>
</template>

<script lang="javascript">

export default {
  data () {
    return {
      right: false,
      loginUri: process.env.STRAPI_HOST,
      locale: null,
      languages: [
        { label: 'Deutsch (de-de)', value: 'de-de', qpack: 'de', icon: 'img:/svg/de.svg' },
        { label: 'English (US) (en-us)', value: 'en-us', qpack: 'en-us', icon: 'img:/svg/en.svg' },
        { label: 'Français (fr-fr)', value: 'fr-fr', qpack: 'fr', icon: 'img:/svg/fr.svg' }
      ]
    }
  },
  created () {
    let userLocale = this.$q.localStorage.getItem('locale') || this.$q.lang.getLocale() || 'de-de'

    for (let i = 0, c = this.languages.length; i < c; i++) {
      if (this.languages[i].value === userLocale) {
        userLocale = this.languages[i]
        break
      }
    }
    this.setLocale(userLocale)
  },
  methods: {
    setLocale (localeValue) {
      this.$i18n.locale = localeValue.value
      this.$q.localStorage.set('locale', localeValue.value)
      this.locale = localeValue
      import('quasar/lang/' + localeValue.qpack).then(({ default: messages }) => {
        this.$q.lang.set(messages)
      })
    }
  }
}
</script>
