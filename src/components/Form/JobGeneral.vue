<template>
  <form @change="emitJobGeneral">
    <div class="row q-col-gutter-md">
      <div class="col-md-6 col-sm-12 col-xs-12 q-col-gutter-y-md">
        <q-input
          color="$blue"
          outlined
          v-model="job.title"
          label="Titel der Anzeige"
        />
        <q-input
          outlined
          v-model="job.organization"
          label="Name des Unternehmens"
        />
        <y-search-region
          label="Einsatzort"
          v-model="job.location"
        />
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 q-col-gutter-y-md">
        <q-expansion-item
          style="background: $orange-1"
          v-model="job.apply.expanded.url"
          label="Bewerbungsformular"
          caption="Link zum eigenen Bewerbungsformular"
          class="hover"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="job.apply.url"
                label="Link zum eigenen Bewerbungsformular"
                color="#faa427"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          style="margin-top:5px; bottom: 15px; background: $orange-1"
          v-model="job.apply.expanded.email"
          label="Email"
          caption="Email für Bewerbungen"
          class="hover"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="job.apply.email"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-card flat>
          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-checkbox
                v-model="job.apply.disabled"
                label="keine Onlinebewerbung/postalische Bewerbungen"
              /><br>
            </div>
          </div>
        </q-card>
        <q-input
          style="margin-top: 10px;"
          outlined
          v-model="job.reference"
          label="Referenz"
          hint="Referenznummer erscheint auf der Rechnung"
        />
      </div>
    </div>
  </form>
</template>

<style lang="scss"></style>

<script lang="javascript">
import YSearchRegion from '../SearchRegion.vue'

export default {
  name: 'Job',
  props: {
    job: {
      default: () => ({
        title: '',
        organization: '',
        location: '',
        apply: {
          expanded: {
            email: false,
            url: false
          }
        }
      })
    }
  },
  data () {
    return {
    }
  },
  methods: {
    filterLocation (addressData) {
      this.location = JSON.stringify({
        coordinates: {
          type: 'Point',
          coordinates: [addressData.longitude, addressData.latitude]
        }
      })
    },
    emitJobGeneral (event) {
      console.log('Location', this.job)
      this.$emit('JobGeneral', this.job)
    },
    emitLocation (event) {
      console.log('Location', event)
      this.$emit('input', this.job.location)
    }
  },
  components: {
    YSearchRegion
  }
}
</script>
