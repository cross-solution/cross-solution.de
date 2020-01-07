<template>
  <q-page padding>
    <form>
      <div class="row text-center q-gutter-col-md justify-center q-mb-md">
        <import-profile/>
      <q-card class="col-6">
        <q-card-section>
          <div class="text-h6">Visibility</div>
          <div class="text-subtitle2">define visibility of your data</div>
        </q-card-section>
        <q-card-actions align="around">
        </q-card-actions>
      </q-card>
      </div>
      <y-desired-work />
      <buttons/>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YDesiredWork from '../../components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from '../../components/General/Buttons.vue'
import ImportProfile from '../../components/Cv/ImportProfile/ImportProfile.vue'

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
