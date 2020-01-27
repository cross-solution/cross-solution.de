<template>
  <q-page padding>
    <form>
      <div class="row q-col-gutter-md">
        <div class="col-md-4">
          <import-profile @profile="(payload) => this.$emit('profile', payload)"/>
        </div>
        <div class="col-md-4">
          <q-card class="full-height">
          <q-card-section>
            <div class="text-h6">Visibility</div>
            <div class="text-subtitle2">define visibility of your data</div>
          </q-card-section>
          <q-card-actions align="around">
          </q-card-actions>
          </q-card>
        </div>
        <div class="col-md-4">
          <q-card class="full-height">
          <q-card-section>
            <div class="text-h6">Export</div>
            <div class="text-subtitle2">Export your data</div>
          </q-card-section>
          <q-card-actions align="around">
          </q-card-actions>
          </q-card>
        </div>
      </div>
      <br>
      <y-desired-work />
      <buttons/>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YDesiredWork from 'components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from 'components/General/Buttons.vue'
import ImportProfile from 'components/Cv/ImportProfile/ImportProfile.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YDesiredWork,
    Buttons,
    ImportProfile
  },
  methods: {
    auth (network) {
      this.$hello(network).login({ scope: 'friends' })
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>
