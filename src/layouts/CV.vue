<template>
  <q-layout>
    <q-header reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <logo />
        </q-toolbar-title>
        <q-tabs align="left" class="desktop-only">
          <q-route-tab
            to="/digital-change"
            :label="$t('Digital Change')"
            class="gt-xs"
          />
          <q-route-tab to="/open-source" label="Open Source" class="gt-xs"/>
          <q-btn-dropdown flat color="primary" :label="$t('About Us')">
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
        <login-info :host="loginUri" />
        <language-switch/>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/cv/general-data">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                {{$t('General Data')}}
              </q-item-section>
            </q-item>

            <q-item clickable to="/cv/desired-work" v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                {{$t('Desired Work')}}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/cv/work-experience">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                {{$t('Work Experience')}}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/cv/education">
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>

              <q-item-section>
                {{$t('Education')}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-drawer v-model="right" side="right" overlay bordered>
      <div class="text-secondary q-pb-md">
        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          :label="$t('Digital Change')"
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
          :label="$t('About Us')"
          icon="calendar"
          align="arround"
          to="/about"
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
          :label="$t('Search Jobs')"
          align="arround"
          icon="search"
          to="/jobs"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('Post a Job')"
          align="arround"
          icon="edit"
          to="/jobpost"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('Apply')"
          align="arround"
          icon="mail"
          to="/apply"
        />
                <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('CV')"
          align="arround"
          icon="school"
          to="/cv"
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
        <q-route-tab name="imprint" to="/imprint" :label="$t('Imprint')" />
        <q-route-tab name="privacy" to="/privacy" :label="$t('Privacy')" />
        <q-route-tab name="contact" to="/contact" :label="$t('Contact')" />
      </q-tabs>
      <a href="https://github.com/cross-solution">
        <q-icon name="fab fa-github" size="lg" />
      </a>
    </q-footer>
  </q-layout>
</template>

<script lang="javascript">
// outside of a Vue file
import LoginInfo from '../components/LoginInfo.vue'
import Logo from '../components/Logo.vue'
import LanguageSwitch from '../components/LanguageSwitch'

export default {
  data () {
    return {
      right: false,
      loginUri: process.env.STRAPI_HOST,
      drawer: true
    }
  },
  components: {
    Logo,
    LoginInfo,
    LanguageSwitch
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
