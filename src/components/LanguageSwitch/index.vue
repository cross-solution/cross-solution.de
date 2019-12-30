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
        { label: 'De', value: 'de-de', icon: 'img:/statics/icons/de.svg' },
        { label: 'En', value: 'en-us', icon: 'img:/statics/icons/us.svg' },
        { label: 'Fr', value: 'fr-fr', icon: 'img:/statics/icons/fr.svg' }
      ]
    }
  },
  created () {
    try {
      this.$i18n.locale = this.$q.lang.getLocale()
      this.localeValue.value = this.$q.lang.getLocale()
      for (var i = 0, len = this.languages.length; i < len; i++) {
        if (this.languages[i].value === this.$q.lang.getLocale()) {
          this.localeValue.label = this.languages[i].label
          this.localeValue.icon = this.languages[i].icon
        }
      }
      console.log(this.$q.lang.getLocale())
    }
    catch (err) {
      console.log('try to figure out, how to set the default language defined by the browser. Current Browser Locale:  ' + this.$q.lang.getLocale())
    }
  },
  methods: {
    setLocale (localeValue) {
      this.$i18n.locale = localeValue.value
      console.log('Sets locale to ' + JSON.stringify(this.localeValue.value))
    }
  }
}
</script>
