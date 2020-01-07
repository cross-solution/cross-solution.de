<template>
  <q-page padding>
    <form class="q-pa-md">
      <q-btn
        color="primary" glossy push
        icon="fab fa-facebook-f" label="Facebook"
        size="md" @click="auth('facebook')" >
      </q-btn>
      <q-btn
        color="primary" glossy push
        icon="fab fa-linkedin" label="Linkedin"
        size="md" @click="auth('linkedin')" >
      </q-btn>
      <q-btn
        color="primary" glossy push
        icon="fab fa-github" label="Github"
        size="md" @click="auth('github')" >
      </q-btn>
      <q-btn
        color="primary" glossy push
        icon="fab fa-google" label="Gooogle"
        size="md" @click="auth('google')" >
      </q-btn>
      <q-btn
        color="primary" glossy push
        icon="fab fa-dropbox" label="Dropbox"
        size="md" @click="auth('dropbox')" >
      </q-btn>

      <y-desired-work />
      <buttons/>
    </form>
  </q-page>
</template>

<script lang="javascript">
import YDesiredWork from '../../components/Cv/DesiredWork/DesiredWork.vue'
import Buttons from '../../components/General/Buttons.vue'

export default {
  // name: 'PageName',
  props: ['loading'],
  components: {
    YDesiredWork,
    Buttons
  },
  data () {
    return {
      salary: '',
      time: '',
      fixed: '',
      left: true,
      drawer: true
    }
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
