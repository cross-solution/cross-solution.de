<template>
  <form
    class="educations"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
  >
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        {{ item.position }}
      </q-timeline-entry>
      <q-timeline-entry :subtitle="subtitle">
        <y-date-range :date-range="item.range" @DateRange="updateDateRange" />
        <q-input
          class="col-12"
          outlined
          v-model="item.position"
          @input="updatePosition"
          label="Position"
        />
        <q-input
          class="col-12"
          outlined
          v-model="item.organization"
          :label="$t('Company/Organization')"
          @input="updateOrganization"
        />
        <q-editor
          class="col-6"
          :dense="$q.screen.gt.md"
          min-height="4rem"
          :value="item.description"
          :toolbar="[
            ['left', 'center', 'right', 'justify'],
            ['bold', 'italic'],
            ['quote', 'unordered', 'ordered'],
            ['undo', 'redo']
          ]"
          @input="updateOrganization"
        />
      </q-timeline-entry>
    </q-timeline>
    <buttons />
  </form>
</template>

<script lang="javascript">

import YDateRange from 'components/General/DateRange/DateRange.vue'
import Buttons from 'components/General/Buttons.vue'
import Educations from '../../../store/models/Educations'

export default {
  name: 'Education',
  props: ['item'],
  methods: {
    updateDateRange (val) {
      if (val.end) {
        this.subtitle = val.start + ' ' + this.$t('to') + ' ' + val.end
      }
      if (!val.end) {
        this.subtitle = val.start
      }
      if (val.ongoing) {
        this.subtitle = val.start + ' ' + this.$t('Ongoing')
      }
      if (val.ongoing && (!val.start)) {
        this.subtitle = this.$t('All my life')
      }
      console.log('update Date Range: ' + JSON.stringify(val))
      Educations.update({
        where: this.id,
        data: val
      })
    },
    updatePosition (e, item) {
      console.log('Position: ' + JSON.stringify(e))
      console.log('Position: ' + JSON.stringify(item))

      this.title = e
      Educations.update({
        where: this.id,
        data: {
          position: e
        }
      })
    },
    updateOrganization (e) {
      Educations.update({
        where: this.id,
        data: {
          organization: e
        }
      })
    },
    updateDescription (e) {
      Educations.update({
        where: this.uid1,
        data: {
          description: e
        }
      })
    }
  },
  data () {
    return {
      subtitle: '',
      title: ''
    }
  },
  components: {
    YDateRange,
    Buttons
  }
}
</script>
