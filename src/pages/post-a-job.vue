<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      header-nav
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Grunddaten"
        icon="settings"
        :done="step > 1"
        style="min-height: 300px;"
      >
        <y-job-general
          :job="job"
          @JobGeneral="setJobGeneral"
        />
      </q-step>

      <q-step
        :name="2"
        title="Anzeige erstellen"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        <YJob
          :job="job"
          @changeMsg="setMessage"
        ></YJob>
      </q-step>

      <q-step
        :name="3"
        title="Kontakt"
        icon="assignment"
        :done="step > 3"
        style="min-height: 200px;"
      >
        <y-address
          :c="job.contact"
          v-on:Address="setAddress"
        />
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
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
                  <q-checkbox
                    v-model="workload"
                    val="100"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vollzeit</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
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
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
                  <q-checkbox
                    v-model="minijob"
                    color="primary"
                  />
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
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
                  <q-checkbox
                    v-model="start"
                    val="100"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>sofort</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                tag="label"
                v-ripple
              >
                <q-item-section
                  avatar
                  top
                >
                  <q-input
                    filled
                    v-model="date"
                    mask="date"
                    :rules="['date']"
                  >
                    <template v-slot:append>
                      <q-icon
                        name="event"
                        class="cursor-pointer"
                      >
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
        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            avatar
            top
          >
            <q-checkbox
              v-model="conditions"
              val="primary"
              color="primary"
            />
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
        <q-banner
          v-if="step === 1"
          class="bg-light-blue-1 text-grey-9 q-px-lg"
        >
          Der Titel der Anzeige, der Name des Unternehmens und der Dienstitz
          wird in Ergebnislisten bei Jobbörsen angezeigt
        </q-banner>
        <q-banner
          v-else-if="step === 2"
          class="text-grey-9 bg-light-blue-1 q-px-lg"
        >Hier können Sie die Anzeige eingeben.</q-banner>
        <q-banner
          v-else-if="step === 3"
          class="bg-light-blue-1 text-grey-9 q-px-lg"
        >Rechnungsanschrift</q-banner>
        <q-banner
          v-else-if="step === 4"
          class="bg-light-blue-1 text-grey-9 q-px-lg"
        >Ihre Anzeige wird besser gefunden, wenn Sie Angaben ....</q-banner>

        <q-banner
          v-else
          class="bg-light-blue-1 text-grey-9 q-px-lg"
        >Endkontrolle</q-banner>
      </template>
    </q-stepper>
  </div>
</template>

<script lang="javascript">
import YAddress from '../components/Form/Address.vue'
import YJobGeneral from '../components/Form/JobGeneral.vue'
import YJob from '../components/Form/Job.vue'
import YCategoryBox from '../components/Form/CategoryBox.vue'

export default {
  meta: {
    'title': 'Stellenanzeige schalten'
  },
  data () {
    return {
      step: 1,
      gLocation: '',
      jobtype: ['fulltime'],
      conditions: '',
      minijob: '',
      start: '',
      date: '',
      workload: '',
      job: {
        headerImage: '/statics/HeaderUpload.png',
        title: '',
        organization: '',
        description: 'Also führender Anbieter ...',
        location: '',
        searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
        tasksTitle: 'Ihre Aufgaben:',
        tasksText: '',
        qualificationsTitle: 'Wir erwarten:',
        qualificationsText: '',
        benefitsTitle: 'Das bieten wir Ihnen:',
        benefitsText: '',
        contactTitle: 'Haben wir ihr Interesse geweckt?',
        contactText: '',
        apply: {
          url: '',
          email: '',
          expanded: {
            email: false,
            url: false
          },
          disabled: false
        }
      }
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
  methods: {
    setAddress (contact) {
      this.job.contact = contact
    },
    setJobGeneral (data) {
      console.log('setJobGeneral', data)
      this.job.title = data.title
      this.job.location = data.location
      this.job.organization = data.organization
      localStorage.setItem('job', JSON.stringify(this.job))
    },
    setMessage (msg) {
      this.text_value = msg
      console.log(msg)
    }
  },
  components: {
    YJobGeneral,
    YAddress,
    YJob,
    YCategoryBox
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.jobs.drawerState
      },
      set (val) {
        console.log('debug', val)
        this.$store.commit('jobs/updateDrawerState', val)
      }
    }
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
