<template>
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
              >Github</a
            >.
          </p>
        </div>
      </div>
    </q-drawer>
</template>

<script lang="javascrip">
export default {
  computed: {
    right () {
      return this.value
    }
  },
  props: ['value']
}
</script>
http://www.xing.com/companies/evangelischebankeg
http://www.xing.com/companies/evangelischebankeg
