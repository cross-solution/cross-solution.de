<template>
    <q-drawer :value="isDrawerOpen" @input="switchDrawerState" side="right" overlay bordered>
      <div class="text-secondary q-pb-md">
        <q-btn
          flat
          color="primary"
          class="full-width lt-md"
          :label="$t('Video Conferencing')"
          icon="calendar"
          align="arround"
          to="/video-conferencing"
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
          icon="mdi-magnify"
          to="/jobs"
          @click="switchDrawerState(false)"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('Post a Job')"
          align="arround"
          icon="mdi-lead-pencil"
          to="/jobpost"
          @click="switchDrawerState(false)"
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
          @click="switchDrawerState(false)"
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
          @click="switchDrawerState(false)"
        />
        <q-separator />
        <div class="q-gutter-md">
          <p class="text-grey-9 q-pa-md">
            Die Stellenangebote werden zur Verfügung gestellt von
            <a href="https://www.stellenmarkt.com">Stellenmarkt.com</a>. Wie die
            Integration im Detail geschieht, sehen Sie auf
            <a href="https://github.com/cross-solution/cross-solution.de"
              >Github</a
            >.
          </p>
        </div>
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          label="Download"
          align="arround"
          icon="cloud_download"
          to="/download"
          @click="switchDrawerState(false)"
        />

      </div>
    </q-drawer>
</template>

<script lang="javascrip">
export default {
  data () {
    return {
      isDrawerOpen: this.value
    }
  },
  props: ['value'],
  watch: {
    value (value) {
      this.switchDrawerState(value)
    }
  },
  methods: {
    switchDrawerState ($event) {
      console.debug('SWITCH DRAWER STATE', $event)
      this.isDrawerOpen = $event
      this.$emit('input', $event)
    }
  }
}
</script>
