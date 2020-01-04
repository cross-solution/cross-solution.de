<template>
  <q-page padding>
    <form class="q-pa-md">
      <y-desired-work />
      <buttons/>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YDesiredWork from '../components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from '../components/General/Buttons.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YDesiredWork,
    Buttons
  },
  data () {
    return {
      selection: ['Festeinstellung'],
      salary: '',
      time: '',
      fixed: '',
      left: true,
      drawer: true
    }
  },
  methods: {
    submitting () {}
  }
}
</script>
