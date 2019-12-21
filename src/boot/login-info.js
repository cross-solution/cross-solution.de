import { SessionStorage, LocalStorage } from 'quasar'
import Vue from 'vue'

class User {
  constructor (resolve) {
    if (resolve !== false && SessionStorage.has('user')) {
      let info = SessionStorage.getItem('user')
      this.user = info.user
      this.token = info.token
    }
    else {
      this.user = false
      this.token = false
    }
  }

  setUser (user, token) {
    SessionStorage.set('user', { user: user, token: token })
    this.user = user
    this.token = token
  }

  clearUser () {
    SessionStorage.remove('user')
    LocalStorage.set('CLEAR_CROSS_USER', this.get('username'))
    LocalStorage.remove('CLEAR_CROSS_USER')
    this.user = false
    this.token = false
  }

  get (key, def) {
    if (this.isLoggedIn()) {
      if (!key) {
        return this.user
      }
      if (key === 'token') {
        return this.token
      }
      return this.user.hasOwnProperty(key) ? this.user[key] : def
    }

    return def
  }

  isLoggedIn () {
    return Boolean(this.token)
  }
}

export const userEvents = new Vue()
// "async" is optional
export default ({ Vue, ssrContext }) => {
  if (ssrContext) {
    Vue.prototype.crossUser = new User(false)
    return
  }
  var user = new User()

  if (!SessionStorage.has('user')) {
    LocalStorage.set('GET_CROSS_USER', Date.now())
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'GET_CROSS_USER' && user.isLoggedIn()) {
      LocalStorage.set('SET_CROSS_USER', SessionStorage.getItem('user'))
      LocalStorage.remove('SET_CROSS_USER')
      return
    }

    if (event.key === 'SET_CROSS_USER' && !user.isLoggedIn()) {
      window.sessionStorage.setItem('user', event.newValue)
      user = new User()
      Vue.prototype.crossUser = user
      return
    }

    if (
      event.key === 'CLEAR_CROSS_USER' &&
      event.newValue &&
      Vue.prototype.crossUser.get('username', false) === event.newValue.replace(/^__q_strn\|/, '')
    ) {
      window.sessionStorage.removeItem('user')
      user = new User()
      Vue.prototype.crossUser = user
      userEvents.$emit('cross_user_clear', true)
    }
  })

  Vue.prototype.crossUser = user
}
