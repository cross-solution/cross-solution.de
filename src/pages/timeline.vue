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
    'title': 'Entwicklung von CROSS Solution seit 2003',
    'meta': {
      'description': { name: 'description', content: 'Open Source Beratung von CROSS Solution. Unsere Timeline zeigt ihnen Schwerpunkte unserer Entwicklung.' }
    }
  },
  // name: 'PageName',
  components: {
    Timeline
  }
}
</script>
