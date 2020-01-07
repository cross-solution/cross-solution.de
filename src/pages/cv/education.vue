<template>
  <q-page padding>
    <h1>{{$t('Education')}}</h1>
    <form>
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
