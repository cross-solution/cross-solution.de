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
    <drawer-right v-model="right" />
    <q-page-container>
      <router-view />{{right}}
    </q-page-container>
    <layout-footer/>
  </q-layout>
</template>

<script lang="javascript">
// outside of a Vue file
import LoginInfo from '../components/LoginInfo.vue'
import Logo from '../components/Logo.vue'
import LanguageSwitch from '../components/LanguageSwitch'
import LayoutFooter from './parts/footer.vue'
import DrawerRight from './parts/right.vue'

export default {
  data () {
    return {
      right: false,
      loginUri: process.env.STRAPI_HOST
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
