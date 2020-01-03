<template>
  <form
    class="work-experience"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
  >
  <q-timeline color="secondary">
      <q-timeline-entry heading>
        {{$t('Work Experience')}}
      </q-timeline-entry>
      <q-timeline-entry
        subtitle="February 22, 1986"
      >
      <y-date-range :date-range="item.range"/>
      <q-input
        class="col-12"
        outlined
        :value="item.position"
        label="Position"
      />
      <q-input
        class="col-12"
        outlined
        :value="item.organization"
        :label="$t('Company/Organization')"
      />
      <q-editor class="col-6"
                :dense="$q.screen.gt.md"
                min-height="4rem"
                :value="item.description"
                :toolbar="[
                  ['left', 'center', 'right', 'justify'],
                  ['bold', 'italic'],
                  ['quote', 'unordered', 'ordered'],
                  ['undo', 'redo']
                ]"
              />
      </q-timeline-entry>
    </q-timeline>
  </form>
</template>

<script lang="javascript">

import YDateRange from '../../Form/DateRange.vue'

export default {
  name: 'workExperience',
  props: ['item'],
  components: {
    YDateRange
  }
}
</script>
