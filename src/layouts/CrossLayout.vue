<template>
  <q-layout>
    <q-header height-hint="150" reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <logo />
        </q-toolbar-title>
        <q-tabs align="left" class="desktop-only">
          <q-route-tab
            to="/digital-change"
            label="Digitaler Wandel"
            class="gt-xs"
          />
          <q-route-tab to="/open-source" label="Open Source" class="gt-xs"/>
          <q-btn-dropdown flat color="primary" :label="label">
            <q-list>
              <q-item clickable v-close-popup to="/about">
                <q-item-section>
                  <q-item-label>Team</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/values">
                <q-item-section>
                  <q-item-label>Werte</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/timeline">
                <q-item-section>
                  <q-item-label>Timeline</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="right" side="right" overlay bordered>
      <div class="text-secondary q-pb-md">
        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          label="Digitaler Wandel"
          icon="calendar"
          align="arround"
          to="/digital-change"
        />

        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          label="Open Source"
          icon="calendar"
          align="arround"
          to="/open-source"
        />
        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          label="Über uns"
          icon="calendar"
          align="arround"
          to="/about-us"
          options="langs"
        />
        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          label="Timeline"
          icon="calendar"
          align="arround"
          to="/timeline"
        />
        <q-separator />
        <h4 class="text-center">Yawik Demo</h4>
        <q-btn
          flat
          color="primary"
          class="full-width"
          label="Jobs suchen"
          align="arround"
          icon="search"
          to="/jobs"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          label="Jobs eingeben"
          align="arround"
          icon="edit"
          to="/jobpost"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          label="Bewerben"
          align="arround"
          icon="mail"
          to="/apply"
        />
        <q-separator />
        <div class="q-gutter-md">
          <p class="text-grey-9 q-pa-md">
            Die Stellenangebote werden zur Verfügung gestellt von
            <a href="https://www.stellenmarkt.com">Stellenmarkt.com</a>. Wie die
            Integration im Detail geschieht, sehen Sie auf
            <a href="https://github.com/cross-solution/cross-solution.de"
              >Guthub</a
            >.
          </p>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="text-white text-center">
      <q-tabs no-caps active-color="secondary" indicator-color="transparent">
        <q-route-tab name="imprint" to="/imprint" label="Impressum" />
        <q-route-tab name="privacy" to="/privacy" label="Datenschutz" />
        <q-route-tab name="contact" to="/contact" label="Kontakt" />
      </q-tabs>
      <login-info :uri="loginUri" />
      <a href="https://github.com/cross-solution">
        <q-icon name="fab fa-github" size="lg" />
      </a>
    </q-footer>
  </q-layout>
</template>

<script lang="javascript">
// outside of a Vue file
import { Notify, openURL } from 'quasar'
import LoginInfo from '../components/LoginInfo.vue'
import Logo from '../components/Logo.vue'

export default {
  data () {
    return {
      right: false,
      loginUri: process.env.STRAPI_HOST + '/auth/local',
      label: 'Über uns'
    }
  },
  components: {
    Logo,
    LoginInfo
  },
  beforeMount () {
    this.coverpage()
    // console.log(navigator.language)
    // console.log(this.$q.lang.getLocale())
  },
  methods: {
    coverpage: function () {
      if (this.$q.cookies.has('yellow-box') !== true) {
        this.$q.cookies.set('yellow-box', 'true', { expires: 5 * 365 })
        Notify.create({
          message:
            'Wir überarbeiten nach 15 Jahren unsere Homepage. Obwohl noch nicht ganz fertig, ist sie bereits online. Wir ermöglichen Ihnen dadurch auf Github zu verfolgen, wie die Seite entsteht.',
          position: 'bottom-left',
          avatar: 'statics/team/cbleek-460x460.jpeg',
          timeout: 10000,
          color: 'orange',
          classes: 'notify_img',
          textColor: 'black',
          actions: [
            {
              label: 'zur alten Version',
              color: 'white',
              noDismiss: false,
              handler () {
                openURL('https://old.cross-solution.de')
              }
            },
            {
              label: 'zum GitHub Repo',
              color: 'white',
              noDismiss: false,
              handler () {
                openURL('https://github.com/cross-solution/cross-solution.de')
              }
            },
            { icon: 'close', color: 'white', label: '' }
          ]
        })
      }
    }
  },
  mounted () {
    if (this.$q.lang.getLocale().indexOf('en') === 0) {
      this.label = 'About Us'
    }
  }
}
</script>

<style type="scss" scoped>
.q-toolbar {
  min-height: 70px;
}
.q-footer a {
  color: white;
}
</style>
