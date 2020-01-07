<template>
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
</template>

<style type="scss" scoped>
.q-footer a {
  color: white;
}
</style>
