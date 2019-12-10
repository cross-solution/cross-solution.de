<template>
  <q-page padding>
    <div>{{ token }}</div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="pass"
        label="Password *"
        lazy-rules

      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  meta: {
    'title': 'Login'
  },
  data () {
    return {
      name: '',
      pass: '',
      token: ''
    }
  },
  // computed: {
  //     token () {
  //       return this.$q.cookies.get('token') || ''
  //     }
  //   }
  // },
  methods: {
    updateToken (val) {
      if (!val) {
        let token = this.$q.cookies.get('token')
        console.debug('Eins', token)
        if (token === 'undefined') {
          console.debug('Zwie')
          token = '--no-token--'
          console.debug(token)
        }
        this.token = token
        return
      }
      this.token = val
      this.$q.cookies.set('token', val)
    },
    onSubmit () {
      this.$axios
        .post(process.env.STRAPI_HOST + '/auth/local', {
          identifier: this.name,
          password: this.pass
        })
        .then(response => {
          // Handle success.
          this.token = response.data.jwt
          this.$forceUpdate()
          console.log('Well done!')
          console.log('User profile', response.data.user)
          console.log('User token', response.data.jwt)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error)
        })
    },
    onReset () {
      console.log('Reset')
    }
  },
  mounted () {
    this.updateToken()
  }
  // name: 'PageName',
}
</script>
