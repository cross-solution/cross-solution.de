<template>
    <q-select
        color="primary"
        dense
        borderless
        options-dense
        v-model='localeValue'
        :options="languages"
        @input="setLocale">
        <template v-slot:selected>
          <div v-if="localeValue">
            <q-icon :name="localeValue.icon" />
          </div>
        </template>
    </q-select>
</template>

<script lang="javascript">

export default {
  data () {
    return {
      right: false,
      loginUri: process.env.STRAPI_HOST,
      locale: this.$q.lang.isoName,
      localeValue: {},
      languages: [
        { label: 'De', value: 'de-de', icon: 'img:/statics/svg/de.svg' },
        { label: 'En', value: 'en-us', icon: 'img:/statics/svg/en.svg' },
        { label: 'Fr', value: 'fr-fr', icon: 'img:/statics/svg/fr.svg' }
      ]
    }
  },
  created () {
    try {
      this.localeValue = JSON.parse(localStorage.getItem('locale'))
      if (!this.localeValue) {
        (
          this.__getClientLocaleSetting()
        )
      }
      this.setLocale(this.localeValue)
    }
    catch (err) {
      console.log('try to figure out, how to set the default language defined by the browser. Current Browser Locale:  ' + this.$q.lang.getLocale())
    }
  },
  methods: {
    setLocale (localeValue) {
      this.$i18n.locale = localeValue.value
      localStorage.setItem('locale', JSON.stringify(localeValue))
    },
    __getClientLocaleSetting () {
      var locale = {}
      try {
        locale.value = this.$q.lang.getLocale()
        console.log('found: ' + locale)

        for (var i = 0, len = this.languages.length; i < len; i++) {
          if (this.languages[i].value === this.$q.lang.getLocale()) {
            locale.label = this.languages[i].label
            locale.icon = this.languages[i].icon
          }
        }
        this.setLocale(locale)
      }
      catch (err) {
      }
    }
  }
}
</script>
