<template>
  <q-layout>
    <q-header reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <logo />
        </q-toolbar-title>
        <q-tabs align="left" class="desktop-only">
          <q-btn-dropdown flat color="primary" :label="$t('Products')">
            <q-list>
              <q-item clickable v-close-popup to="/video-conferencing">
                <q-item-section>
                  <q-item-label>{{$t('Video Conferencing')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/application-form">
                <q-item-section>
                  <q-item-label>Bewerbungsformulare</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/jobpost">
                <q-item-section>
                  <q-item-label>Jobs für Google</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/job-interviews">
                <q-item-section>
                  <q-item-label>Bewerbungsgespräche</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/gitlab">
                <q-item-section>
                  <q-item-label>Gitlab Hosting</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/camera">
                <q-item-section>
                  <q-item-label>Camera</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
        <login-info/>
        <language-switch/>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
    <drawer-right v-model="right" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <layout-footer/>
  </q-layout>
</template>

<script lang="javascript">
// outside of a Vue file
import LoginInfo from 'components/LoginInfo.vue'
import Logo from 'components/Logo.vue'
import LanguageSwitch from 'components/LanguageSwitch'
import LayoutFooter from './parts/footer.vue'
import DrawerRight from './parts/right.vue'

export default {
  data () {
    return {
      right: false
    }
  },
  components: {
    Logo,
    LoginInfo,
    LanguageSwitch,
    LayoutFooter,
    DrawerRight
  }
}
</script>

<style type="scss" scoped>
.q-toolbar {
  min-height: 70px;
}
</style>
