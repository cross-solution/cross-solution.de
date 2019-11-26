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
          <q-route-tab to="/open-source" label="Open Source" class="gt-xs" />
          <q-route-tab to="/about" label="über uns" class="gt-xs" />
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

        <div class="q-gutter-md">
          <p class="text-grey-9 q-pa-md">
            Die Stellenangebote werden zur Verfügung gestellt von
            <a href="htps://www.stellenmarkt.com">Stellenmarkt.com</a>. Wie die
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
      <q-separator />
      <a href="https://github.com/cross-solution">
        <q-icon name="fab fa-github" />
      </a>
    </q-footer>
  </q-layout>
</template>

<script lang="javascript">
// outside of a Vue file
import { Notify, openURL } from 'quasar'

Notify.create({
  message:
    'Wir überarbeiten nach 15 Jahren unsere Homepage. Obwohl noch nicht ganz fertig, ist sie bereits online. Wir ermöglichen Ihnen dadurch auf Github zu verfolgen, wie die Seite entsteht.',
  position: 'center',
  contentTitle: 'Ifo',
  icon: 'thumb_up',
  timeout: 10000,
  color: 'orange',
  textColor: 'black',
  actions: [
    {
      label: 'zur alten Version',
      color: 'white',
      noDismiss: true,
      handler () {
        openURL('https://cross-solution.de')
      }
    },
    {
      label: 'zur GitHub Repo',
      color: 'white',
      noDismiss: true,
      handler () {
        openURL('https://github.com/cross-solution/cross-solution.de')
      }
    },
    { icon: 'close', color: 'white' }
  ]
})

import Logo from '../components/Logo.vue'

export default {
  data () {
    return {
      right: false
    }
  },
  components: {
    Logo
  }
}
</script>

<style type="scss" scoped>
.q-toolbar {
  min-height: 70px;
}
q-footer a {
  color: white;
}
</style>
