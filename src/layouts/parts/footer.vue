<template>
  <q-footer bordered class="text-white text-center">
    <q-tabs no-caps active-color="secondary" indicator-color="transparent">
      <q-route-tab name="imprint" to="/imprint" :label="$t('Imprint')" />
      <q-route-tab name="privacy" to="/privacy" :label="$t('Privacy')" />
      <q-route-tab name="contact" to="/contact" :label="$t('Contact')" />
      <download-as-pdf-button />
    </q-tabs>
    <a href="https://github.com/cross-solution">
      <q-icon name="fab fa-github" size="lg" />
    </a>
    <p>running quasar: {{this.$q.version}}</p>
  </q-footer>
</template>

<script>
import DownloadAsPdfButton from 'components/DownloadAsPdfButton.vue'

export default {
  components: {
    DownloadAsPdfButton
  }
}</script>
<style type="scss" scoped>
.q-footer a {
  color: white;
}
</style>
