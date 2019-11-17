<template>
  <q-layout view="lhh Lpr lff">

    <q-header
      elevated
      reveal
      class="bg-white text-primary"
      height-hint="98"
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
    <div claas="text-primary">
      <h6>we redesign our homepage. We invite you to watch <a href="https://github.com/cross-solution/cross-solution.de">how we do it</a></h6>
    </div>
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
      <h2>Hier kommt was rein</h2>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="text-white"
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

<style scoped>
.cross-menu {
  border-top: 1px solid #faa427;
  background: #014a88;
}
</style>
