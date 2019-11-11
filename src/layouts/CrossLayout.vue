<template>
  <q-layout view="lhh Lpr lff">

    <q-header
      elevated
      reveal
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title>
          <logo />
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="right = !right"
        />
      </q-toolbar>

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
    </q-header>

    <q-drawer
      v-model="right"
      side="right"
      overlay
      bordered
    >
      <h2>Hier kommt was rein</h2>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="bg-white text-primary"
    >
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
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
    </q-footer>

  </q-layout>
</template>

<script>

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
