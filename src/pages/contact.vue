<template>
  <q-page padding>
    <h1>Get in touch</h1>
    <div>
      Sie können uns direkt per Email kontaktieren oder nachfolgendes
      Kontaktformular verwenden. Vertrauliche Informationen können Sie uns
      verschlüsselt schicken (siehe www.gnupg.org). Unser öffenlicher Schlüssel
      ist hier verfügbar (Id: 0x8AD12510, Fingerprint: 40FE 2824 60BA BDE2 247E
      919A DD27 60F5 8AD1 2510). Wir werden uns kurzfristig mit Ihnen in
      Verbindung setzen.
    </div>
    <div class="q-pa-md q-gutter-y-sm">
      <form
        @submit="onSubmit"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="true"
      >
        <div>
          <q-input v-model="name" label="Name *" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type name']"/>
          <q-input v-model="email" label="Email *" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type email']"/>
          <q-editor
            v-model="editor"
            min-height="5rem"
            aria-placeholder="Ihre Nachricht"
          />
          <q-btn color="primary" type="submit" icon-right="send" label="Absenden" />
        </div>
        <q-inner-loading :showing="isSending">
          <q-spinner size="4em" :thickness="2" color="primary" />
        </q-inner-loading>
      </form>
    </div>
  </q-page>
</template>

<script lang="javascript">
export default {
  meta: {
    'title': 'get in touch'
  },
  name: 'Contact',
  data () {
    return {
      editor: '',
      email: '',
      name: '',
      isSending: false
    }
  },
  methods: {
    updateToken (val) {
      if (!val) {
        let token = this.$q.cookies.get('token')
        if (token === 'undefined') {
          token = '--no-token--'
        }
        this.token = token
        return
      }
      this.token = val
      this.$q.cookies.set('token', val)
    },
    onSubmit (e) {
      e.preventDefault()
      this.isSending = true
      const config = {
        headers: { Authorization: `Bearer ` + this.crossUser.get('token') }
      }
      this.$axios
        .post(process.env.STRAPI_HOST + '/email/', {
          name: this.name,
          email: this.email,
          message: this.editor
        }, config)
        .then(response => {
          // Handle success.
          this.token = response.data.jwt
          this.$forceUpdate()
          console.log('Well done!')
          console.log('User profile', response.data.user)
          console.log('User token', response.data.jwt)

          setTimeout(() => {
            this.onReset()
          }, 0.5 * 1000)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error)
        })
    },
    onReset () {
      this.isSending = false
      this.name = ''
      this.email = ''
      this.editor = ''
    }
  },
  mounted () {
    this.updateToken()
  }
}
</script>
