<template>
  <div>
    <div v-if="!loginStatus.isLoggedIn">
      <q-btn
        color="primary"
        glossy
        label="Login"
        @click="doLogin=true"
      />
      <q-dialog
        ref="loginDialog"
        v-model="doLogin"
        persistent
      >
        <q-card class="relative-position">
          <q-card-section>
            <div class="text-h6">
              Login
            </div>
          </q-card-section>

          <q-card-section v-if="loginStatus.isError">
            <q-card class="q-pa-sm text-white bg-negative">
              {{ loginStatus.message }}
            </q-card>
          </q-card-section>

          <q-form
            @submit="onSubmit"
            @reset="onCancel"
          >
            <q-card-section class="relative-position">

              <q-input
                v-model="credentials.name"
                dense
                autofocus
                placeholder="Name"
              />
              <q-input
                v-model="credentials.pass"
                dense
                :type="showPw ? 'text' : 'password'"
                placeholder="Password"
                @keyup.enter="$refs.loginForm.submit()"
              >
                <template v-slot:append>
                  <q-icon
                    :name="showPw ? 'visibility' : 'visibility_off'"
                    class="cursor-pointer"
                    @click="showPw = !showPw"
                  />
                </template>
              </q-input>
              <q-inner-loading :showing="loginStatus.isDoing">
                <q-spinner
                  size="4em"
                  :thickness="2"
                  color="primary"
                />
              </q-inner-loading>
            </q-card-section>
            <q-card-actions
              align="right"
              class="text-primary"
            >
              <q-btn
                type="reset"
                v-close-popup
                flat
                label="Cancel"
              />
              <q-btn
                type="submit"
                flat
                label="Login"
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </div>

    <div v-if="loginStatus.isLoggedIn">
      Hallo {{ userInfo.name }}
      <q-btn
        color="white"
        flat
        label="Logout"
        @click="onLogout"
      />
    </div>
  </div>
</template>

<script>

class LoginState {
  static get ERROR () {
    return 'ERROR'
  }
  static get LOGGED_IN () {
    return 'LOGGED_IN'
  }
  static get LOGGED_OUT () {
    return 'LOGGED_OUT'
  }
  static get DOING () {
    return 'DOING'
  }

  constructor () {
    this.state = LoginState.LOGGED_OUT
    this.message = ''
  }

  get isError () {
    return this.state === LoginState.ERROR
  }

  get isLoggedIn () {
    return this.state === LoginState.LOGGED_IN
  }

  get isLoggedOut () {
    return this.state === LoginState.LOGGED_OUT
  }

  get isDoing () {
    return this.state === LoginState.DOING
  }

  error (msg) {
    this.state = LoginState.ERROR
    this.message = msg
  }

  loggedIn () {
    this.state = LoginState.LOGGED_IN
    this.message = ''
  }

  loggedOut () {
    this.state = LoginState.LOGGED_OUT
    this.message = ''
  }

  doing () {
    this.state = LoginState.DOING
    this.message = ''
  }

  reset () {
    this.state = LoginState.LOGGED_OUT
    this.message = ''
  }
}

export default {
  name: 'LoginInfo',
  props: {
    uri: {
      type: String,
      required: true
    },
    map: {
      type: [String, Object],
      default: () => ({ identifier: 'identifier', password: 'password' })
    }
  },
  data () {
    return {
      'showPw': false,
      'doLogin': false,
      'loginStatus': new LoginState(),
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
  computed: {
    paramMap () {
      return typeof this.map === 'object' ? this.map : { identifier: this.map, password: 'password' }
    }
  },
  mounted () {
    this.updateUserInfo()
  },
  methods: {
    updateUserInfo (user, token) {
      let userInfo
      if (!user) {
        userInfo = this.$q.cookies.get('user')
        console.log('Noval', userInfo)
        if (!userInfo) {
          return
        }
      }
      else {
        userInfo = {
          user: user,
          name: user.username,
          token: token
        }
      }
      this.loginStatus.loggedIn()
      this.$q.cookies.set('user', userInfo)
      this.userInfo = userInfo
    },
    onCancel (preserve) {
      this.credentials = { 'name': '', 'pass': '' }
      this.doLogin = false
      this.showPw = false
      if (preserve !== true) {
        this.loginStatus.reset()
      }
    },
    onSubmit () {
      this.loginStatus.doing()
      const { name, pass } = this.credentials

      console.debug(this.credentials, name, pass)
      if (name === '' || pass === '') {
        this.loginStatus.error('Credentials are not complete')
        return
      }

      let params = {}
      params[this.paramMap.identifier] = name
      params[this.paramMap.password] = pass

      this.$axios
        .post(this.uri, params)
        .then(response => {
          // Handle success.
          this.updateUserInfo(response.data.user, response.data.jwt)
          this.onCancel(true)
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
          this.loginStatus.error(message)
          console.log('An error occurred:', error.response)
        })
    },
    onLogout () {
      this.$q.cookies.remove('user')
      this.loginStatus.reset()
      this.onCancel()
    }
  }

}
</script>
