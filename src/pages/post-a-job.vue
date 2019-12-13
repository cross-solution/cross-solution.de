<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      header-nav
      color="primary"
      animated
      swipeable
    >
      <q-step
        :name="1"
        title="Grunddaten"
        icon="settings"
        :done="step > 1"
        style="min-height: 300px;"
        ><div class="row q-gutter-md">
          <div class="col-md-6 q-gutter-y-md">
            <q-input
              color="$blue"
              outlined
              v-model="title"
              label="Titel der Anzeige"
            />

            <q-input
              outlined
              v-model="organization"
              label="Name des Unternehmens"
            />
            <y-search-region label="Einsatzort" :value="location" />
          </div>
          <div style="width: 44%; margin-left: 5%;">
            <q-expansion-item
              style="background: $orange-1"
              v-model="applyForm"
              label="Bewerbungsformular"
              caption="Link zum eigenen Bewerbungsformular"
              class="hover"
            >
              <q-card>
                <q-card-section>
                  <q-input
                    outlined
                    v-model="applyUrl"
                    label="Link zum eigenen Bewerbungsformular"
                    color="#faa427"
                  />
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              style="margin-top:5px; bottom: 15px; background: $orange-1"
              v-model="expandedEmail"
              label="Email"
              caption="Email für Bewerbungen"
              class="hover"
            >
              <q-card>
                <q-card-section>
                  <q-input outlined v-model="applyEmail" />
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-card flat>
              <div class="q-pa-md">
                <div class="q-gutter-sm">
                  <q-checkbox
                    v-model="applyEmail"
                    label="keine Onlinebewerbung/postalische Bewerbungen"
                  />
                </div>
              </div>
            </q-card>
            <q-input
              style="margin-top: 10px;"
              outlined
              v-model="reference"
              label="Referenz"
              hint="Referenznummer erscheint auf der Rechnung"
            />
          </div>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Anzeige erstellen"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
      <YJob @changeMsg="setMessage"></YJob>
      </q-step>

      <q-step
        :name="3"
        title="Kontakt"
        icon="assignment"
        :done="step > 3"
        style="min-height: 200px;"
      >
        <y-address />
      </q-step>

      <q-step
        :name="4"
        title="Kategorien"
        icon="assignment"
        style="min-height: 200px;"
      >
        <div class="row q-gutter-sm">
          <y-category-box />
          <q-card class="col-md-3 col-sm-6 col-xs-12">
            <q-card-section>
              <div class="text-h6">Pensum</div>
            </q-card-section>

            <q-card-section>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="workload" val="100" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vollzeit</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox
                    v-model="workload"
                    val="contract"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Teilzeit</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="minijob" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Minijob</q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
          <q-card class="col-md-3 col-sm-6 col-xs-12">
            <q-card-section>
              <div class="text-h6">Eintrittstermin</div>
            </q-card-section>

            <q-card-section>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="start" val="100" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>sofort</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-input filled v-model="date" mask="date" :rules="['date']">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="date"
                            @input="() => $refs.qDateProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
      </q-step>

      <q-step
        :name="5"
        title="Abschicken"
        icon="send"
        style="min-height: 200px;"
      >
        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="conditions" val="primary" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>AGB</q-item-label>
            <q-item-label caption>
              ich habe die AGBs gelesen und akzeptiere Sie
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? 'Absenden' : 'Weiter'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Zurück"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-light-blue-1 text-grey-9 q-px-lg">
          Der Titel der Anzeige, der Name des Unternehmens und der Dienstitz
          wird in Ergebnislisten bei Jobbörsen angezeigt
        </q-banner>
        <q-banner
          v-else-if="step === 2"
          class="text-grey-9 bg-light-blue-1 q-px-lg"
          >Hier können Sie die Anzeige eingeben.</q-banner
        >
        <q-banner
          v-else-if="step === 3"
          class="bg-light-blue-1 text-grey-9 q-px-lg"
          >Rechnungsanschrift</q-banner
        >
        <q-banner
          v-else-if="step === 4"
          class="bg-light-blue-1 text-grey-9 q-px-lg"
          >Ihre Anzeige wird besser gefunden, wenn Sie Angaben ....</q-banner
        >

        <q-banner v-else class="bg-light-blue-1 text-grey-9 q-px-lg"
          >Endkontrolle</q-banner
        >
      </template>
    </q-stepper>
  </div>
</template>

<script lang="javascript">
import YSearchRegion from '../components/SearchRegion.vue'
import YAddress from '../components/Form/Address.vue'
import YJob from '../components/Form/Job.vue'
import YCategoryBox from '../components/Form/CategoryBox.vue'
export default {
  meta: {
    'title': 'Stellenanzeige schalten'
  },
  data () {
    return {
      step: 1,
      title: 'Jobtitle',
      organization: '',
      gLocation: '',
      pensum: 10,
      jobtype: ['fulltime'],
      applyUrl: 'https://',
      applyEmail: '',
      apply: '',
      conditions: '',
      workload: ['100'],
      minijob: '',
      start: '',
      date: ''
    }
  },
  props: {
    locationType: {
      type: String,
      default: 'geocode'
    },
    description: String,
    searching: String,
    tasks: String,
    titleTasks: String,
    qualifications: String,
    titleQualifications: String,
    benefits: String,
    titleBenefits: String,
    titleContact: String,
    contact: String
  },
  mounted () {
  },
  methods: {
    filterLocation (addressData) {
      this.location = JSON.stringify({
        coordinates: {
          type: 'Point',
          coordinates: [addressData.longitude, addressData.latitude]
        }
      })
    },
    setMessage (msg) {
      this.text_value = msg
      console.log(msg)
    }
  },
  components: {
    YSearchRegion,
    YAddress,
    YJob,
    YCategoryBox
  }
}
</script>

<style lang="sass" scoped>
.location
  border: none
body.desktop .q-focus-helper:before
  background: #faa427 !important
body.desktop .q-focus-helper:after
  color: #faa427 !important
body.desktop .q-focus-helper:after
  background: #faa427 !important
.hover
  color: #faa427
</style>
