<template>
  <q-page padding>
    <h1>{{$t('Education')}}</h1>
    <form class="q-pa-md">
      <education />
    </form>
  </q-page>
</template>

<script lang="javascript">
import Education from '../../components/Cv/Education/List.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    Education
  },

  data () {
    return {
      left: true,
      drawer: true
    }
  }
}
</script>
