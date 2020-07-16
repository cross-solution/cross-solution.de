<template>
  <q-page padding>
    <!-- content -->
    <timeline />
  </q-page>
</template>

<script>
import Timeline from '../components/Timeline.vue'
export default {
  meta: {
    'title': 'Geschichte von CROSS Solution seit 2003',
    'meta': {
      'description': { name: 'description', content: 'Der Open Source Berater CROSS Solution führt seinen Werdegang in einer Timeline' }
    }
  },
  // name: 'PageName',
  components: {
    Timeline
  }
}
</script>
