<template>
  <q-page padding>
    <h1>Camera</h1>
    <div class="camera-frame q-pa-md">
      <video
        ref="video"
        class="full-width"
        autoplay
      />
    </div>
  </q-page>
</template>

<script lang="javascript">

export default {
  name: 'Camera',
  meta: {
    'title': 'Über uns',
    'meta': {
      'description': { name: 'description', content: 'Das Team von CROSS Solution.' }
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm
        ? 'dense'
        : this.$q.screen.lt.md
          ? 'comfortable'
          : 'loose'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    initCamera () {
      console.log('init camera')
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
    }
  },
  mounted () {
    this.initCamera()
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.profiles  lang
  width: 100%
  max-width: 350px
.btn-icon
  width: 40px
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>
