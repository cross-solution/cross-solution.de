<template>
  <div>
    <div v-if="!loggedIn">
      <q-btn color="primary" flat label="Login" @click="doLogin = true" />
      <q-dialog ref="loginDialog" v-model="doLogin" persistent>
        <q-card class="relative-position">
          <q-tabs v-model="loginStatus.mode" dense active-color="primary">
            <q-tab name="login" label="Login" />
            <q-tab name="register" label="Register" />
          </q-tabs>

          <q-card-section>
            <q-card
              v-if="loginStatus.isError"
              class="q-pa-sm text-white bg-negative"
            >
              {{ loginStatus.message }}
            </q-card>
          </q-card-section>

          <q-form ref="loginForm" @submit="onSubmit" @reset="onCancel">
            <q-card-section class="relative-position">
              <q-input
                v-model="credentials.name"
                dense
                autofocus
                placeholder="Name"
              />
              <q-input
                v-if="loginStatus.mode == 'register'"
                v-model="credentials.email"
                dense
                placeholder="E-Mail"
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
                <q-spinner size="4em" :thickness="2" color="primary" />
              </q-inner-loading>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn type="reset" v-close-popup flat label="Cancel" />
              <q-btn
                v-if="loginStatus.mode == 'login'"
                type="submit"
                flat
                label="Login"
              />
              <q-btn
                v-if="loginStatus.mode == 'register'"
                type="submit"
                flat
                label="Register"
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </div>

    <div v-if="loggedIn">

        <q-btn-dropdown
        flat
          :icon="`img:` + host + crossUser.get('photo', { url: null }).url"
          auto-close
          color="primary"
        >
          <!-- dropdown content goes here -->
          <q-list class="bg-orange-1" padding style="width: 250px">
            <q-item clickable @click="onLogout">
              <q-item-section>
                <q-item-label>Einstellungen</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon
                  name="settings"
                  color="primary"
                />
              </q-item-section>
            </q-item>
            <q-item clickable @click="onLogout" dense>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon
                  name="fas fa-sign-out-alt"
                  color="primary"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

    </div>
  </div>
</template>

<script>
import { userEvents } from 'src/boot/login-info'

class LoginState {
  static get ERROR () {
    return 'ERROR'
  }
  static get SUCCESS () {
    return 'SUCCESS'
  }
  static get DOING () {
    return 'DOING'
  }

  constructor () {
    this.state = undefined
    this.message = ''
    this.mode = 'login'
  }

  get isError () {
    return this.state === LoginState.ERROR
  }

  get isDoing () {
    return this.state === LoginState.DOING
  }

  get isSuccess () {
    return this.state === LoginState.SUCCESS
  }

  error (msg) {
    this.state = LoginState.ERROR
    this.message = msg
  }

  doing () {
    this.state = LoginState.DOING
    this.message = ''
  }

  success () {
    this.state = LoginState.SUCCESS
    this.message = ''
  }

  reset () {
    this.state = undefined
    this.message = ''
  }
}

export default {
  name: 'LoginInfo',
  props: {
    host: {
      type: String,
      required: true
    },
    loginPath: {
      type: String,
      default: '/auth/local'
    },
    registerPath: {
      type: String,
      default: '/auth/local/register'
    },
    map: {
      type: [String, Object],
      default: () => ({
        identifier: 'identifier',
        password: 'password',
        email: 'email',
        username: 'username'
      })
    }
  },
  data () {
    return {
      loggedIn: this.crossUser.isLoggedIn(),
      showPw: false,
      doLogin: false,
      loginStatus: new LoginState(),
      credentials: {
        name: '',
        email: '',
        pass: ''
      }
    }
  },
  computed: {
    paramMap () {
      return typeof this.map === 'object'
        ? this.map
        : { identifier: this.map, password: 'password' }
    }
  },
  mounted () {
    var that = this
    userEvents.$on('cross_user_clear', function () {
      that.loggedIn = false
    })
  },
  methods: {
    updateUserInfo (user, token) {
      this.loginStatus.success()
      this.crossUser.setUser(user, token)
      this.loggedIn = true
    },
    onCancel (preserve) {
      this.credentials = { name: '', pass: '' }
      this.doLogin = false
      this.showPw = false
      this.loginStatus.mode = 'login'
      if (preserve !== true) {
        this.loginStatus.reset()
      }
    },
    getParams () {
      let params = {}
      if (this.loginStatus.mode === 'login') {
        params[this.paramMap.identifier] = this.credentials.name
      }
      else {
        params[this.paramMap.username] = this.credentials.name
        params[this.paramMap.email] = this.credentials.email
      }
      params[this.paramMap.password] = this.credentials.pass

      return params
    },
    validateParams (params) {
      const { identifier, password, username, email } = this.paramMap
      if (this.loginStatus.mode === 'login') {
        return params[identifier] && params[password]
      }

      return params[username] && params[email] && params[password]
    },
    onSubmit () {
      this.loginStatus.doing()
      const params = this.getParams()

      if (!this.validateParams(params)) {
        this.loginStatus.error('Credentials are not complete')
        return
      }

      const url =
        this.host +
        (this.loginStatus.mode === 'login'
          ? this.loginPath
          : this.registerPath)

      this.$axios
        .post(url, params)
        .then(response => {
          // Handle success.
          this.updateUserInfo(response.data.user, response.data.jwt)
          this.onCancel(true)
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
        })
    },
    onLogout () {
      this.crossUser.clearUser()
      this.loginStatus.reset()
      this.onCancel()
      this.loggedIn = false
    }
  }
}
</script>
