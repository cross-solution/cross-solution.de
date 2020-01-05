<template>
  <form
    class="work-experience"
    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
  >
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <div class="row">
          <q-input v-if="item.inProgress"
            class="col-6"
            outlined
            v-model="item.position"
            @input="updatePosition"
            label="Position"
          />
          <q-input
            v-if="item.inProgress"
            class="col-6"
            outlined
            v-model="item.organization"
            :label="$t('Company/Organization')"
            @input="updateOrganization"
          />
          {{ item.position }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :icon="edit" :subtitle="subtitle" :title="item.organization">
        <y-date-range :date-range="item.range" @DateRange="updateDateRange" v-if="item.inProgress" />
        <q-editor
          v-if="item.inProgress"
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
          @input="updateDescription"
        />
        <div v-html="item.description" v-if="!item.inProgress">
        </div>
      </q-timeline-entry>
    </q-timeline>
    <buttons v-if="item.inProgress"/>
  </form>
</template>

<script lang="javascript">

import YDateRange from '../../Form/DateRange.vue'
import Buttons from '../../General/Buttons.vue'
import WorkExperiences from '../../../store/models/WorkExperiences'

export default {
  name: 'workExperience',
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
      WorkExperiences.update({
        where: this.item.id,
        data: val
      })
    },
    updatePosition (e) {
      console.log('Position: ' + JSON.stringify(e))

      WorkExperiences.update({
        where: this.item.id,
        data: {
          position: e
        }
      })
    },
    updateOrganization (e) {
      WorkExperiences.update({
        where: this.item.id,
        data: {
          organization: e
        }
      })
    },
    updateDescription (e) {
      WorkExperiences.update({
        where: this.item.id,
        data: {
          description: e
        }
      })
    },
    onSubmit (e) {
      console.log('Submit: ' + JSON.stringify(e))
      WorkExperiences.update({
        where: this.item.id,
        data: {
          inProgress: false
        }
      })
      this.$emit('saved')
    },
    onReset (e) {
      console.log('Reset: ' + JSON.stringify(e))
    }
  },
  data () {
    return {
      title: '',
      subtitle: ''
    }
  },
  components: {
    YDateRange,
    Buttons
  },
  computed: {
    edit: function () {
      if (this.item.inProgress) {
        return 'save'
      }
      return 'edit'
    }
  }

}
</script>
