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
            <q-item>
          <q-slider
            v-model="completeness"
            markers
            readonly
            :min="0"
            :max="10"
          />
            </q-item>
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

        <q-img
          class="absolute-top"
          src="/statics/cv-bg.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent text-center">
            <q-avatar size="70px" class="q-mb-sm">
              <img src="/statics/PhotoUpload.png">
            </q-avatar>
            <div class="text-weight-bold">Mark Muster</div>
            <div>@muster</div>
          </div>
        </q-img>
      </q-drawer>

    <drawer-right v-model="right"/>

    <q-page-container>
      <router-view />
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
      loginUri: process.env.STRAPI_HOST,
      drawer: true,
      completeness: 1
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
.q-footer a {
  color: white;
}
</style>
