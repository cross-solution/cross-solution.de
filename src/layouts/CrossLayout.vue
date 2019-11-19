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
        <q-tabs
          align="left"
          class="desktop-only"
        >
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
      <div class="text-green">
        <q-btn
          color="primary"
          class="full-width"
          label="Digitaler Wandel"
          to="/digital-change"
        />
        <q-btn
          color="red-5"
          fontColor="#555"
          class="full-width"
          label="Jobs Suchen"
          to="/jobs"
        />
        <q-btn
          color="primary"
          class="full-width"
          label="Jobs eingeben"
          to="/jobpost"
        />

        <div class="q-gutter-md">

          <q-btn
            color="secondary"
            class="full-width"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>
                  Jobs Suchen
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Downloads</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-btn>

          <q-btn
            color="secondary"
            label="Auto-Close Menu"
          >
            <q-menu auto-close>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <div
            class="inline bg-amber rounded-borders cursor-pointer"
            style="max-width: 300px"
          >
            <div class="fit flex flex-center text-center non-selectable q-pa-md">
              I am groot!<br>(Click me! Using touch-position)
            </div>

            <q-menu touch-position>
              <q-list style="min-width: 100px">
                <q-item
                  clickable
                  v-close-popup
                >
                  <q-item-section>Branches</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                >
                  <q-item-section>Leaves</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                >
                  <q-item-section>Roots</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>

        </div>
      </div>
      <timeline />
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
        <q-route-tab
          name="Post"
          to="/jobpost"
          label="Post a Job"
        />
      </q-tabs>
      <q-separator />
      <a href="https://github.com/cross-solution">
        <q-icon name="fab fa-github" />
      </a>
    </q-footer>
  </q-layout>
</template>

<script>

// outside of a Vue file
import { Notify } from 'quasar'

Notify.create({
  message: 'we redesign our homepage. We invite you to watch <a href="https://github.com/cross-solution/cross-solution.de">how we do it</a>',
  html: true,
  position: 'top',
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
