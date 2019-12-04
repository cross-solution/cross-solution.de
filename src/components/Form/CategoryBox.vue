<template>
  <q-card class="col-md-3 col-sm-6 col-xs-12">
    <q-card-section>
      <div class="text-h6">Art der Anstellung</div>
    </q-card-section>

    <q-card-section>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="jobtype" val="fulltime" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Festanstellung</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="jobtype" val="contract" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Freie Mitarbeit</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="jobtype" val="internship" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Praktikum</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="jobtype" val="apprenticeship" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Ausbildungsplatz</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script lang="javascript">

export default {
  data () {
    return {
      jobtype: ['fulltime']
    }
  }
}
</script>
