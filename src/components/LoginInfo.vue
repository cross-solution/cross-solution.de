<template>
  <div>
    <div v-if="!loggedIn">
      <q-btn
        color="primary"
        glossy
        label="Login"
        @click="doLogin=true"
      ></q-btn>
      <q-dialog ref="loginDialog" v-model="doLogin" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section v-if="loginStatus.error">
          <p class="q-pa-sm bg-negative text-white">{{ loginStatus.message }}</p>
        </q-card-section>

        <q-card-section>
          <q-input dense v-model="credentials.name" autofocus placeholder="Name"/>
          <q-input dense v-model="credentials.pass" placeholder="Password"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="onCancel" v-close-popup />
          <q-btn flat label="Login" @click="onSubmit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>

    <div v-if="loggedIn">
      Hallo {{ userInfo.name }} <q-btn color="white" flat label="Logout" @click="onLogout"/>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      'loggedIn': false,
      'doLogin': false,
      'loginStatus': {
        error: false,
        message: ''
      },
      'credentials': {
        'name': '',
        'pass': ''
      },
      'userInfo': {
        user: {},
        name: '',
        token: ''
      }
    }
  },
  methods: {
    updateUserInfo (val) {
      if (!val) {
        let userInfo = this.$q.cookies.get('user')
        console.log('Noval', userInfo)
        if (!userInfo) {
          return
        }
        console.debug(this.userInfo)
        this.userInfo = userInfo
        this.loggedIn = true
        return
      }
      this.userInfo = {
        user: val.user,
        name: val.name,
        token: val.token
      }
      this.loggedIn = true
      this.$q.cookies.set('user', val)
    },
    onCancel () {
      this.loginStatus.error = false
      this.loginStatus.message = ''
      this.credentials = { 'name': '', 'pass': '' }
      this.doLogin = false
    },
    onSubmit () {
      this.loginStatus.error = false
      const { name, pass } = this.credentials

      if (name === '' || pass === '') {
        this.loginStatus.error = true
        this.loginStatus.message = 'Credentials are not complete'
        return
      }

      this.$axios
        .post(process.env.STRAPI_HOST + '/auth/local', {
          identifier: name,
          password: pass
        })
        .then(response => {
          // Handle success.
          this.updateUserInfo({ user: response.data.user, name: response.data.user.username, token: response.data.jwt })
          this.doLogin = false
          console.log('Well done!')
          console.log('User profile', response.data.user)
          console.log('User token', response.data.jwt)
        })
        .catch(error => {
          let message = ''
          if (error.response) {
            message = error.response.data.message['0'].messages['0'].message
          }
          else {
            message = error
          }
          this.loginStatus.error = true
          this.loginStatus.message = message
          console.log('An error occurred:', error.response)
        })
    },
    onLogout () {
      this.$q.cookies.remove('user')
      this.loggedIn = false
      this.onCancel()
    }
  },
  mounted () {
    this.updateUserInfo()
  }

}
</script>
