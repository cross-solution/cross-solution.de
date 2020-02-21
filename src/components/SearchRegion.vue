<template>
  <div class="row">
    <q-select
      outlined
      borderless
      class="col-2"
      v-model="country"
      :options="countries"
      @input="setCountry"
    >
      <template v-slot:option="scope">
        <q-item
          v-bind="scope.itemProps"
          v-on="scope.itemEvents"
        >
          <q-item-section avatar>
            <q-icon :name="scope.opt.icon" size="sm" style="padding-top: 10px" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-html="scope.opt.label" />
            <q-item-label caption>{{ scope.opt.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:selected-item="scope">
        <q-icon :name="scope.opt.icon" size="md" />
      </template>
    </q-select>
    <q-field class="col-10"
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
          :country="country.value"
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
      gVisible: false,
      country: {
        label: 'Deutschland',
        value: 'de',
        description: '',
        icon: 'img:/statics/svg/de.svg'
      },
      countries: [
        {
          label: 'Deutschland',
          value: 'de',
          description: '',
          icon: 'img:/statics/svg/de.svg'
        },
        {
          label: 'Frankreich',
          value: 'fr',
          description: '',
          icon: 'img:/statics/svg/fr.svg'
        },
        {
          label: 'Italien',
          value: 'it',
          description: '',
          icon: 'img:/statics/svg/it.svg'
        },
        {
          label: 'Schweiz',
          value: 'ch',
          description: '',
          icon: 'img:/statics/svg/ch.svg'
        },
        {
          label: 'Österreich',
          value: 'at',
          description: '',
          icon: 'img:/statics/svg/at.svg'
        },
        {
          label: 'Weltweit',
          value: '',
          description: '',
          icon: 'public'
        }
      ]
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
    },
    setCountry (val) {
      this.country = val
    }
  }
}
</script>

<style scoped>
.location {
  border: none;
}
</style>
