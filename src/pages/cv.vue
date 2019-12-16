<template>
  <q-page padding>
    <div class="row q-col-gutter-x-md">
      <div class="col-md-10 col-xs-12">
        <h2>Grunddaten</h2>
        <y-address />
        <div class="col-lg-12 col-sm-6 col-xs-12" style="margin-top: 21px;">
          <q-input outlined type="country" label="Nationalität" lazy-rules />
        </div>
      </div>
      <div class="col-md-2 col-xs-12">
        <y-photo-upload />
      </div>
      <div class="col-md-10 col-xs-12">
        <h2>Gewünschte Tätigkeit</h2>
        <strong>Gewünschte Art der Anstellung</strong>
        <div style="background: #EEF4FB; padding: 8px;">
          <q-toggle
            color="primary"
            label="Zeitarbeit"
            v-model="selection"
            val="Zeitarbeit"
            value="Zeitarbeit"
          />
          <q-toggle
            color="primary"
            label="Festanstellung"
            v-model="selection"
            val="Festanstellung"
            value="Festanstellung"
          />
          <q-toggle
            color="primary"
            label="Projektarbeit"
            v-model="selection"
            val="Projektarbeit"
            value="Projektarbeit"
          />
          <q-toggle
            color="primary"
            label="Freie Mitarbeit"
            v-model="selection"
            val="Freie Mitarbeit"
            value="Freie Mitarbeit"
          />
          <q-toggle
            color="primary"
            label="Praktikum"
            v-model="selection"
            val="Praktikum"
            value="Praktikum"
          />
        </div>
        <div class="q-gutter-lg" style="margin-top: 21px;">
          <div class="col-lg-12 col-sm-6 col-xs-12">
            <q-input
              outlined
              type="DesiredPosition"
              label="Angestrebte Tätigkeit"
              lazy-rules
            />
          </div>

          <div class="col-lg-12 col-sm-6 col-xs-12">
            <q-input
              outlined
              type="DesiredLocation"
              label="Gewünschter Arbeitsort/Bundesland"
              lazy-rules
            />
          </div>
          <div class="col-lg-12 col-sm-6 col-xs-12">
            <q-input
              outlined
              type="Traveling"
              label="Reisebereitschaft"
              lazy-rules
            />
          </div>
          <div class="col-lg-12 col-sm-6 col-xs-12">
            <q-input
              outlined
              type="Salary"
              label="Gehaltsvorstellung"
              lazy-rules
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="javascript">
import YAddress from '../components/Form/Address.vue'
import YPhotoUpload from '../components/Form/PhotoUpload.vue'

export default {
  // name: 'PageName',
  components: {
    YAddress,
    YPhotoUpload
  },
  data () {
    return {
      selection: ['Festeinstellung']
    }
  }
}
</script>
