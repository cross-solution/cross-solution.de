<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" header-nav color="primary" animated>
      <q-step
        :name="1"
        title="Grunddaten"
        caption="Titel, Dienstitz, Bewerbung"
        icon="settings"
        :done="step > 1"
        style="min-height: 300px;"
        ><div class="row q-gutter-md">
          <div class="col-md-6 q-gutter-y-md">
            <q-input outlined v-model="title" label="Titel der Anzeige" />

            <q-input
              outlined
              v-model="organization"
              label="Name des Unternehmens"
            />

            <y-search-region label="Einsatzort" :value="location" />
          </div>
          <div class="col-auto q-gutter-y-md">
            <div>
              <q-expansion-item
                v-model="applyForm"
                icon="perm_identity"
                label="Formular"
                caption="Link zu eigenen Formular"
              >
                <q-card>
                  <q-card-section>
                    <q-input
                      outlined
                      v-model="applyUrl"
                      label="Link zum Formular"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                v-model="expandedEmail"
                icon="perm_identity"
                label="Email"
                caption="Email für Bewerbungen"
              >
                <q-card>
                  <q-card-section>
                    <q-input
                      outlined
                      v-model="applyEmail"
                      label="Link zum Formular"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="apply" val="notOnline" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>keine Onlinebewerbung</q-item-label>
                  <q-item-label caption>
                    postalische Bewerbungen
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <q-input
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
        caption="Aufgaben, Qualifikationen, Benefits"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        <q-splitter v-model="splitterModel" style="height: 400px;">
          <template v-slot:before>
            <div class="q-pa-md">
              <q-card class="col-md-3">
                <q-card-section>
                  <y-job :title="title" :tasks="tasks" />
                </q-card-section>
              </q-card>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">Voransicht</div>
              <div>{{ description }}</div>
              <div>{{ searching }}</div>
              <div class>
                <h1>{{ title }}</h1>
                <h3>{{ titleTask }}</h3>
                <div>{{ task }}</div>

                <h3>{{ titleQualifications }}</h3>
                <div>{{ qualifications }}</div>

                <h3>{{ titleBenefits }}</h3>
                <div>{{ benefits }}</div>
              </div>
            </div>
          </template>
        </q-splitter>
      </q-step>

      <q-step
        :name="3"
        title="Kontakt"
        caption="Rechnungsanschrift"
        icon="assignment"
        :done="step > 3"
        style="min-height: 200px;"
      >
        <y-address />
      </q-step>

      <q-step
        :name="4"
        title="Kategorien"
        caption="Vertragsart, Gehalt, Eintrittstermin"
        icon="assignment"
        style="min-height: 200px;"
      >
        <div class="row q-gutter-sm">
          <q-card class="col-md-3">
            <q-card-section>
              <div class="text-h6">Art der Anstellung</div>
            </q-card-section>

            <q-card-section>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox
                    v-model="jobtype"
                    val="fulltime"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Festanstellung</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox
                    v-model="jobtype"
                    val="contract"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Freie Mitarbeit</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox
                    v-model="jobtype"
                    val="internship"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Praktikum</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox
                    v-model="jobtype"
                    val="apprenticeship"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Ausbildungsplatz</q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
          <q-card class="col-md-3">
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
          <q-card class="col-md-3">
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
        caption="Preview"
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

export default {
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
      splitterModel: 50, // start at 50%
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
    YSearchRegion,
    YAddress,
    YJob
  }
}
</script>

<style scoped>
.location {
  border: none;
}
</style>
