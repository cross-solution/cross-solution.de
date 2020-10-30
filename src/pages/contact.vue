<template>
  <q-page padding>
    <h1>Get in touch</h1>
    <div class="row q-gutter-md justify-center">
      <q-card class="col-md-5 col-lg-5 col-sm-4 col-xs-12">
        <q-card-section>
          <h2>Zoom Call</h2>
          <div class="text-body1">
            Wir <b>verschenken</b> täglich 2 x 15 Minuten. Sie können sich einfach ein Zeitfenster aussuchen und wir
            treffen uns in einem Zoom Call.
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            type="a"
            class="absolute-bottom"
            key="btn_size_rd_xl"
            rounded
            color="primary"
            size="xl"
            target="_blank"
          >
            <q-no-ssr>
            <!-- Calendly Link-Widget Beginn -->
              <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
              <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
              <a class="zoom" href="" onclick="Calendly.initPopupWidget(
                {url: 'https://calendly.com/cross-solution'}
                );return false;">Zeitfenster wählen</a>
              <!-- Calendly Link-Widget Ende -->
            </q-no-ssr>
          </q-btn>
        </q-card-actions>
      </q-card>
      <form
        v-if="!status.isOK"
        @submit="onSubmit"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="true"
      >

        <q-card class="col-md-6 col-lg-6 col-sm-4 col-xs-12">
          <q-card-section>
            <h2>Text Message</h2>
            <div class="text-body1">
              oder hinterlassen Sie uns kurz eine Nachricht. Wir melden uns dann bei Ihnen.
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

                </div>
                <q-inner-loading :showing="isSending">
                  <q-spinner
                    size="4em"
                    :thickness="2"
                    color="primary"
                  />
                </q-inner-loading>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
                class="absolute-bottom"
                color="primary"
                type="submit"
                label="Absenden"
                rounded
                size="xl"
            />
          </q-card-actions>
        </q-card>
      </form>

    </div>
  </q-page>
</template>

<script lang="javascript">
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

<style lang="sass" scoped>
a.zoom
  color: #fff
.q-card__actions
  min-height: 60px
  text-align: center
</style>
