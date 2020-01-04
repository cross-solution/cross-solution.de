<template>
  <q-page padding>
    <form class="q-pa-md">
      <div class="row q-col-gutter-x-md">
        <div class="col-md-10 col-xs-12">
          <h2>Grunddaten</h2>
          <y-address />
          <div class="col-lg-12 col-sm-6 col-xs-12" style="margin-top: 21px;">
            <q-input outlined type="country" label="Nationalität" lazy-rules />
          </div>
        </div>
        <div class="col-md-2 col-xs-12">
          <y-photo-upload
            color="transparent"
            upload-type="Photo"
            default-image="/statics/PhotoUpload.png"
          />
        </div>
      </div>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YAddress from '../../components/Form/Address.vue'
// import YPhotoUpload from '../../components/Form/PhotoUpload.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YAddress
  //  YPhotoUpload
  },

  data () {
    return {
      selection: ['Festeinstellung'],
      locale: undefined,
      salary: '',
      time: '',
      fixed: '',
      left: true
    }
  },
  methods: {
    submitting () {}
  }
}
</script>
