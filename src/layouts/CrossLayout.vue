<template>
  <q-layout view="lhh Lpr lff">

    <q-header
      elevated
      reveal
      class="bg-white text-primary"
    >
      <q-toolbar>
        <q-toolbar-title>
          <logo />
        </q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab
            to="/digital-change"
            label="Digitaler Wandel"
          />
          <q-route-tab
            to="/open-source"
            label="Open Source"
          />
          <q-route-tab
            to="/about"
            label="über uns"
          />
        </q-tabs>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="right = !right"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="right"
      side="right"
      overlay
      bordered
    >
      <q-tabs align="left">
        <q-route-tab
          to="/jobs"
          label="Jobs"
        />
        <q-route-tab
          to="/open-source"
          label="Open Source"
        />
        <q-route-tab
          to="/about"
          label="über uns"
        />
      </q-tabs>
      <timeline />
      <logo />
      <logo />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="text-white text-center"
    >
      <q-tabs
        no-caps
        active-color="secondary"
        indicator-color="transparent"
      >
        <q-route-tab
          name="imprint"
          to="/imprint"
          label="Impressum"
        />
        <q-route-tab
          name="privacy"
          to="/privacy"
          label="Datenschutz"
        />
        <q-route-tab
          name="contact"
          to="/contact"
          label="Kontakt"
        />
      </q-tabs>
      <q-separator />
      <a href="https://github.com/cross-solution">
        <q-icon name="fab fa-github" /></a>

    </q-footer>
  </q-layout>
</template>

<script>

// outside of a Vue file
import { Notify } from 'quasar'

Notify.create({
  message: 'we redesign our homepage. We invite you to watch <a href="https://github.com/cross-solution/cross-solution.de">how we do it</a>',
  html: true,
  icon: 'thumb_up',
  color: 'primary'
})

import Logo from '../components/Logo.vue'
import Timeline from '../components/Timeline.vue'

export default {
  data () {
    return {
      right: false
    }
  },
  components: {
    Logo,
    Timeline
  }
}
</script>

<style type="scss" scoped>
</style>
