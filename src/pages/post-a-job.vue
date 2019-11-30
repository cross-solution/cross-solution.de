<template>
  <div class="q-pa-md">
    <h1>Stellenanzeige eingeben</h1>
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Grunddaten"
        caption="Titel, Dienstitz, Bewerbung"
        icon="settings"
        :done="step > 1"
        class="row"
        style="min-height: 300px;"
      >
        <div></div>

        <q-input outlined v-model="title" label="Titel der Anzeige" />

        <q-input
          outlined
          v-model="organization"
          label="Name des Unternehmens"
        />

        <search-region label="Einsatzort" />

        <q-select
          label="Art der Anstellung"
          outlined
          v-model="jobtype"
          multiple
          :options="options"
          counter
          max-values="2"
          hint="Max 2 selections"
          style="width: 250px"
        />

        <q-badge color="secondary">
          Pensum: {{ basicModel }} (100% to 10%)
        </q-badge>
        <q-slider v-model="pensum" markers label :min="1" :max="10" />
      </q-step>

      <q-step
        class="row"
        :name="2"
        title="Anzeige erstellen"
        caption="Aufgaben, Qualifikationen, Benefits"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        <q-editor v-model="description" min-height="5rem" />
        <q-input borderless v-model="searching" />
        <h1>{{ title }}</h1>
        <div class="col-md-6">
          <q-input borderless v-model="titleTasks" />
          <q-editor v-model="tasks" min-height="5rem" />
        </div>
        <div class="col-md-6">
          <q-input borderless v-model="titleQualifications" />
          <q-editor v-model="qualifications" min-height="5rem" />
        </div>
        <div class="col-md-6">
          <q-input borderless v-model="titleBenefits" />
          <q-editor v-model="benefits" min-height="5rem" />
        </div>
        <div class="col-md-6">
          <q-input borderless v-model="titleContact" />
          <q-editor v-model="contact" min-height="5rem" />
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Kontakt"
        caption="Rechnungsanschrift"
        icon="assignment"
        style="min-height: 200px;"
      >
        <y-address />
      </q-step>

      <q-step
        :name="4"
        title="Abschicken"
        caption="Preview"
        icon="send"
        style="min-height: 200px;"
      >
        <q-separator />
        <div>{{ description }}</div>
        <div>{{ searching }}</div>
        <div class="">
          <h1>{{ title }}</h1>
          <h3>{{ titleTask }}</h3>
          <div>{{ task }}</div>

          <h3>{{ titleQualifications }}</h3>
          <div>{{ qualifications }}</div>

          <h3>{{ titleBenefits }}</h3>
          <div>{{ benefits }}</div>
        </div>
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
        <q-banner v-if="step === 1" class="bg-secondary text-grey-9 q-px-lg">
          Der Titel der Anzeige, der Name des Unternehmens und der Dienstitz
          wird in Ergebnislisten bei Jobbörsen angezeigt
        </q-banner>
        <q-banner
          v-else-if="step === 2"
          class="bg-secondary text-grey-9 q-px-lg"
        >
          The ad group helps you to...
        </q-banner>
        <q-banner
          v-else-if="step === 3"
          class="bg-secondary text-white q-px-lg"
        >
          The Ad template is disabled - this won't be displayed
        </q-banner>
        <q-banner v-else class="bg-blue-8 text-white q-px-lg">
          Endkontrolle
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>

<script lang="javascript">
import SearchRegion from '../components/SearchRegion.vue'
import YAddress from '../components/Form/Address.vue'

export default {
  data () {
    return {
      step: 1,
      title: 'Jobtitle',
      pensum: 100,
      jobtype: [],
      searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
      options: ['Festanstellung', 'Freie Mitarbeit', 'Praktikum'],
      tasks: '',
      titleTasks: 'Aufgaben:',
      description: 'mit X Mitarbeitern ist Y führender Anbieter von Y ....',
      qualifications: '',
      titleQualifications: 'Qualifikationen:',
      benefits: '',
      titleBenefits: 'Benefits:',
      titleContact: 'Kontakt',
      contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt'
    }
  },
  props: {
    locationType: {
      type: String,
      default: 'geocode'
    }
  },
  mounted () {},
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
    SearchRegion,
    YAddress
  }
}
</script>

<style scoped>
.location {
  border: none;
}
</style>
