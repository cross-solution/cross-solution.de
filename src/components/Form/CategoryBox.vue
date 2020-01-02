<template>
  <q-card class="col-md-3 col-sm-6 col-xs-12">
    <q-card-section>
      <div class="text-h6">{{$t('Job Type')}}</div>
    </q-card-section>
    <q-card-section>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.jobtype" val="permanent" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('permanent')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.jobtype" val="contract" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('contract')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.jobtype" val="internship" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('internship')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.jobtype" val="apprenticeship" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('apprenticeship')}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script lang="javascript">

export default {
  data () {
    return {}
  },
  props: ['job']
}
</script>
