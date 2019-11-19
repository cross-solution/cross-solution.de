<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Allgemeine Daten"
        icon="settings"
        :done="step > 1"
        class="row"
        style="min-height: 300px;"
      >
        <q-field
          label="Ort oder PLZ"
          class="col-md-4"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:control>
            <vue-google-autocomplete
              id="gLocation"
              classname="input"
              placeholder="Ort oder PLZ"
              class="self-center full-width no-outline location"
              v-on:placechanged="filterLocation"
              :types="locationType"
              country="de"
              lang="de"
            >
            </vue-google-autocomplete>
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              class="cursor-pointer"
            />

          </template>

        </q-field>
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step
        :name="3"
        title="Ad template"
        icon="assignment"
        disable
        style="min-height: 200px;"
      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="add_comment"
        style="min-height: 200px;"
      >
        <q-separator />
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner
          v-if="step === 1"
          class="bg-purple-8 text-white q-px-lg"
        >
          Campaign settings are important...
        </q-banner>
        <q-banner
          v-else-if="step === 2"
          class="bg-orange-8 text-white q-px-lg"
        >
          The ad group helps you to...
        </q-banner>
        <q-banner
          v-else-if="step === 3"
          class="bg-green-8 text-white q-px-lg"
        >
          The Ad template is disabled - this won't be displayed
        </q-banner>
        <q-banner
          v-else
          class="bg-blue-8 text-white q-px-lg"
        >
          The final step is creating the ad...
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 1
    }
  },
  props: {
    locationType: {
      type: String,
      default: 'geocode'
    }
  },
  mounted () { },
  methods: {
    filterLocation (addressData) {
      this.location = JSON.stringify({
        coordinates: {
          type: 'Point',
          coordinates: [addressData.longitude, addressData.latitude]
        }
      })
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
