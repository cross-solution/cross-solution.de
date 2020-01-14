<template>
  <q-page padding>
    <h1>{{$t('Desired Work')}}</h1>
    <form>
      <desired-work />
      <buttons/>
    </form>
  </q-page>
</template>

<script lang="javascript">
import DesiredWork from 'components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from 'components/General/Buttons.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    DesiredWork,
    Buttons
  },
  data () {
    return {
    }
  }
}
</script>
