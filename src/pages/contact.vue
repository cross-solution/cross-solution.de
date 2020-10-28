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
      <q-card
        v-if="status.isFAIL"
        class="q-pa-sm text-white bg-negative"
      >
        Es ist ein Fehler aufgetreten.
      </q-card>
      <q-card
        v-if="status.isOK"
        class="q-pa-sm text-white bg-positive"
      >
        Vielen Dank für Ihre Anfrage. Wir werden diese so schnell wie möglich bearbeiten.
      </q-card>
      <form
        v-if="!status.isOK"
        @submit="onSubmit"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="true"
      >
        <div>
          <q-input
            v-model="name"
            label="Name *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type name']"
          />
          <q-input
            v-model="email"
            label="Email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type email']"
          />
          <q-editor
            v-model="editor"
            min-height="5rem"
            aria-placeholder="Ihre Nachricht"
          />
          <q-btn
            color="primary"
            type="submit"
            icon-right="send"
            label="Absenden"
          />
        </div>
        <q-inner-loading :showing="isSending">
          <q-spinner
            size="4em"
            :thickness="2"
            color="primary"
          />
        </q-inner-loading>
      </form>
    </div>
    <h1 id="zoom">Talk to us</h1>
    <div class="row">
      <div class="col-md-12">
        <q-no-ssr>
          <vue-calendly url="https://calendly.com/cross-solution" :height="650"></vue-calendly>
        </q-no-ssr>
      </div>
    </div>
    <h1>CROSS Solution on Air</h1>
    <div class="row">
      <div class="col-md-6">
        Jeweils Freitags von 18:00 bis 18:30 ist CROSS Solution on Air. Wir laden
        zum Austausch von Ideen per Video Call unter zum unter<br/>

        <q-btn
          type="a"
            key="btn_size_rd_xl"
            rounded
            color="primary"
            size="xl"
            label="Join CROSS On Air"
            href="https://confi.cross-solution.de/CrossSolutionOnAir"
            target="_blank"
          />
      </div>
      <div class="col-md-6">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/live_stream?channel=UC5VCgGvaOCo39AQ2-jtrVRg"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="javascript">
import Vue from 'vue'
import VueCalendly from 'vue-calendly'

Vue.use(VueCalendly)

class Status {
  static get FAIL () {
    return 'FAIL'
  }
  static get OK () {
    return 'OK'
  }
  static get NONE () {
    return 'NONE'
  }

  constructor () {
    this.state = Status.NONE
  }

  get isOK () {
    return this.state === Status.OK
  }

  get isFAIL () {
    return this.state === Status.FAIL
  }

  ok () {
    this.state = Status.OK
  }

  fail () {
    this.state = Status.FAIL
  }
}
export default {
  meta: {
    'title': 'get in touch with CROSS Solution',
    'meta': {
      'description': { name: 'description', content: 'Rufen Sie uns an unter +49 (0)69-71910360. Oder vereinbaren Sie einen Videocall.' }
    }
  },
  name: 'Contact',
  data () {
    return {
      editor: '',
      email: '',
      name: '',
      isSending: false,
      status: new Status()
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
      this.$axios
        .post(process.env.EMAIL_SCRIPT, {
          name: this.name,
          email: this.email,
          message: this.editor
        })
        .then(response => {
          // Handle success.
          this.isSending = false
          if (response.data.ok) {
            this.status.ok()
          }
          else {
            this.status.fail()
          }
        })
        .catch(error => {
          // Handle error.
          this.isSending = false
          this.status.fail()
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
