<template>
  <div>
    <q-field
      :label="label"
      outlined
      v-model="text"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:control>
        <vue-google-autocomplete
          v-if="gVisible"
          id="gLocation"
          class="input full-width no-outline location"
          placeholder="Ort eingeben"
          v-on:placechanged="filterLocation"
          :types="locationType"
          country="de"
          hint="Ort oder Postleitzahl"
        ></vue-google-autocomplete>
      </template>
      <template v-if="text" v-slot:append>
        <q-icon
          name="cancel"
          @click.stop="clearLocation"
          class="cursor-pointer"
        />
      </template>
    </q-field>
  </div>
</template>

<script lang="javascript">
export default {
  props: {
    locationType: {
      type: String,
      default: 'geocode'
    },
    value: String,
    label: String
  },
  data () {
    return {
      text: '',
      gVisible: false
    }
  },
  components: {
    VueGoogleAutocomplete: () => {
      const API_KEY = process.env.GOOGLE_PLACES_KEY

      return new Promise(resolve => {
        let scriptElement = document.createElement('script')
        scriptElement.onload = () => {
          resolve(import('vue-google-autocomplete'))
        }

        scriptElement.id = 'gAutocompleteScript'
        scriptElement.async = true
        scriptElement.setAttribute(
          'src',
          `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
        )
        if (!document.getElementById('gAutocompleteScript')) {
          document.head.appendChild(scriptElement)
        }
      })
    }
  },
  methods: {
    filterLocation (address) {
      this.text = document.getElementById('gLocation').value
      this.$emit('input', this.text)
    },
    clearLocation (value) {
      this.text = ''
      this.$emit('input', this.text)
      document.getElementById('gLocation').value = null
    },
    onFocus () {
      this.gVisible = true
      window.setTimeout(function () {
        document.getElementById('gLocation').focus()
      }, 300)
    },
    onBlur () {
      let that = this
      window.setTimeout(function () {
        that.gVisible = that.text
      }, 150)
    }
  }
}
</script>

<style scoped>
.location {
  border: none;
}
</style>
