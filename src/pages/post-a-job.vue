<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      header-nav
      color="primary"
      animated
      :swipeable="$q.platform.is.mobile"
      :contracted="$q.platform.is.mobile"
    >
      <q-step
        :name="1"
        :title="$t('General Data')"
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
        :title="$t('Create Job')"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        <y-job
          :job="job"
          @JobDescription="setJobDescription"
        ></y-job>
      </q-step>

      <q-step
        :name="3"
        :title="$t('Contact')"
        icon="assignment"
        :done="step > 3"
        style="min-height: 200px;"
      >
        <y-address
          :c="job.contact"
          @Contact="setJobContact"
        />
      </q-step>

      <q-step
        :name="4"
        :title="$t('Categories')"
        icon="assignment"
        style="min-height: 200px;"
      >
        <div class="row q-gutter-sm">
          <y-category-box  v-if="job" :job="job"/>
          <q-card class="col-md-3 col-sm-6 col-xs-12">
            <q-card-section>
              <div class="text-h6">{{$t('Workload')}}</div>
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
                    v-model="job.workload"
                    val="fulltime"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('fulltime')}}</q-item-label>
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
                    v-model="job.workload"
                    val="parttime"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('parttime')}}</q-item-label>
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
                    v-model="job.workload"
                    color="primary"
                    val="minijob"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('minijob')}}</q-item-label>
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
              v-model="job.gtcAccepted"
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
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            :label="$t('Back')"
            class="q-ml-sm"
          />
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? $t('Submit') : $t('Next')"
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
      start: '',
      date: '',
      job: null
    }
  },
  created () {
    try {
      if (!this.job) {
        this.job = JSON.parse(localStorage.getItem('job'))
        console.log('got job from localStorage' + this.job)
        if (!this.job) {
          this.initJob()
          this.saveJob(this.job)
        }
      }
      else {
        console.log('this job already exists ' + this.job)
      }
    }
    catch (err) {
      console.log('could not load job from localStorage')
      this.initJob()
    }
  },
  methods: {
    setJobGeneral (data) {
      console.log('Try to set setJobGeneral: ', data)
      this.job.title = data.title
      this.job.location = data.location
      this.job.organization = data.organization
      this.job.apply.expanded.email = data.apply.expanded.email
      this.job.apply.expanded.url = data.apply.expanded.url
      this.job.apply.url = data.apply.url
      this.job.apply.email = data.apply.email
      this.job.apply.disabled = data.apply.disabled
      this.saveJob(this.job)
    },
    setJobDescription (job) {
      console.log('Try to set JobDescription: ' + job)
      this.job.contactText = job.contactText
      this.job.description = job.description
      this.job.searching = job.searching
      this.job.tasksTitle = job.tasksTitle
      this.job.tasksText = job.tasksText
      this.job.benefitsTitle = job.benefitsText
      this.job.benefitsText = job.benefitsTitle
      this.job.contactText = job.contactText
      this.job.contactTitle = job.contactTitle
      this.saveJob(this.job)
    },
    setJobContact (data) {
      console.log('Try to set setJobContact: ', data)
      try {
        this.job.contact = data
        this.saveJob(this.job)
      }
      catch (err) {
        console.log('Could not set setJobContact: ', data)
      }
    },
    initJob () {
      this.job = {
        step: 1,
        headerImage: '/statics/HeaderUpload.jpg',
        organizationLogo: '/statics/PhotoUpload.png',
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
        },
        workload: ['fulltime'],
        jobtype: ['permanent'],
        contact: {
          fistname: '',
          lastname: '',
          options: ['male', 'female']
        },
        gtcAccepted: false
      }
    },
    saveJob (job) {
      localStorage.setItem('job', JSON.stringify(job))
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
