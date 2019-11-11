<template>
  <q-page class="flex">
    <div class="row col-12">
      <h1>Jobs</h1>
    </div>
    <div class="row">
      <jobsearch />
    </div>
  </q-page>
</template>

<script>
import Jobsearch from '../components/Jobsearch.vue'

export default {
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
