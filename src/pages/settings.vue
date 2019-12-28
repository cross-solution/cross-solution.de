<template>
  <q-page padding>
    <h1>{{$t('Settings')}}</h1>
    <y-address/>
    <y-photo-upload/>
  </q-page>
</template>

<script lang="javascript">
import YAddress from '../components/Form/Address.vue'
import YPhotoUpload from '../components/Form/PhotoUpload.vue'

export default {
  name: 'Settings',
  components: {
    YAddress,
    YPhotoUpload
  }
}

</script>
