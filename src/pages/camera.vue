<template>
  <q-page padding>
    <h1>Camera</h1>
    <div class="row">
      <div class="col-md-6 camera-frame q-pa-md">
        <!-- v-show instead of v-if -->
        <!-- otherwise the content will be deleted from the dom -->
        <video
          v-show="!imageCaptured"
          ref="video"
          autoplay
          playsinline
          class="full-width" />
        <canvas
          v-show="imageCaptured"
          ref="canvas"
          height="240"
          class="full-width" />
      </div>
      <div class="text-center q-pa-md">
        <q-btn
          v-if="hasCameraSupport"
          @click="captureImage"
          :disable="imageCaptured"
          round
          size="lg"
          color="grey-10"
          icon="camera" />
        <!-- file picker -->
        <q-file
          outlined
          label="Choose an Image"
          v-model="imageUpload"
          accept="image/*"
          @input="captureImageFallback">
          <template v-slot:prepend>
            <q-icon name="eva-attach-outline" />
          </template>
        </q-file>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'camera',
  data () {
    return {
      post: {
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true,
      locationLoading: false
    }
  },
  computed: {
    locationSupported () {
      if ('geolocation' in navigator) return true
      return false
    }
  },
  methods: {
    initCamera () {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.hasCameraSupport = false
      })
    },
    captureImage () {
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
      this.disableCamera()
    },
    captureImageFallback (file) {
      this.post.photo = file
      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')
      var reader = new FileReader()
      reader.onload = event => {
        var img = new Image()
        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          context.drawImage(img, 0, 0)
          this.imageCaptured = true
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    },
    disableCamera () {
      this.$refs.video.srcObject.getVideoTracks().forEach(track => {
        track.stop()
      })
    },
    dataURItoBlob (dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(',')[1])
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length)
      // create a view into the buffer
      var ia = new Uint8Array(ab)
      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], { type: mimeString })
      return blob
    },
    getLocation () {
      this.locationLoading = true
      navigator.geolocation.getCurrentPosition(position => {
        this.getCityAndCountry(position)
      // eslint-disable-next-line handle-callback-err
      }, err => {
        this.locationError()
      }, { timeout: 7000 })
    },
    getCityAndCountry (position) {
      // use `` to interpolate the string
      let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`
      // axios calls the url
      this.$axios.get(apiUrl).then(result => {
        this.locationSuccess(result)
      // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        this.locationError()
      })
    },
    locationSuccess (result) {
      this.post.location = result.data.city
      if (result.data.country) {
        this.post.location += `, ${result.data.country}`
      }
      this.locationLoading = false
    },
    locationError () {
      this.$q.dialog({
        title: 'Error',
        message: 'Could not find location'
      })
      this.locationLoading = false
    }
  },
  mounted () {
    this.initCamera()
  },
  beforeDestroy () {
    if (this.hasCameraSupport) {
      this.disableCamera()
    }
  }
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
