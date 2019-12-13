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
    'title': 'Stellenangebote'
  },
  data () {
    return {
      grid: false
    }
  },
  components: {
    Jobsearch
  }
}
</script>
