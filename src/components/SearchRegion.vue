<template>
  <div>
    <q-field
      label="Ort oder PLZ"
      outlined
      clearable
      v-model="text"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:control>
        <vue-google-autocomplete
          id="gLocation"
          classname="input"
          placeholder=""
          class="full-width no-outline location"
          v-on:placechanged="filterLocation"
          :types="locationType"
          country="de"
          hint="Ort oder Postleitzahl"
        >
        </vue-google-autocomplete>
      </template>
      <template
        v-if="text"
        v-slot:append
      >
        <q-icon
          name="cancel"
          @click.stop="text = null"
          class="cursor-pointer"
        />
      </template>
    </q-field>
  </div>
</template>

<script>

export default {
  props: {
    locationType: {
      type: String,
      default: 'geocode'
    }
  },
  components: {
    VueGoogleAutocomplete: () => {
      const API_KEY = process.env.GOOGLE_PLACES_KEY

      return new Promise((resolve) => {
        let scriptElement = document.createElement('script')
        scriptElement.onload = () => {
          resolve(import('vue-google-autocomplete'))
        }
        scriptElement.id = 'gAutocompleteScript'
        scriptElement.async = true
        scriptElement.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`)
        if (!document.getElementById('gAutocompleteScript')) {
          document.head.appendChild(scriptElement)
        }
      })
    }
  }
}
</script>

<style scoped>
.location {
  border: none;
}
</style>
