<template>
  <q-page class="padding">
    <div class="row col-12">
      <h1>Jobs</h1>
    </div>
    <div class="row">
      <jobsearch />
    </div>
  </q-page>
</template>

<script lang="javascript">
import Jobsearch from '../components/Jobsearch.vue'
export default {
  meta: {
    'title': 'Stellenangebote',
    'meta': {
      'description': { name: 'description', content: 'Demo für die Einbindung von Stellenanzeigen. Die Daten werden zu verfügung gestellt von Stellenmarkt.com' }
    }
  },
  components: {
    Jobsearch
  }
}
</script>
