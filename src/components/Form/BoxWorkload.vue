<template>
  <q-card class="col-md-3 col-sm-6 col-xs-12">
    <q-card-section>
      <div class="text-h6">{{$t('Workload')}}</div>
    </q-card-section>
    <q-card-section>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.workload" val="fulltime" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('fulltime')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.workload" val="parttime" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('parttime')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="job.workload" color="primary" val="minijob" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('minijob')}}</q-item-label>
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
