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
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="true"
      >
        <div>
          <q-input v-model="name" label="Name" />
          <q-input v-model="email" label="Email" />
          <q-editor
            v-model="editor"
            min-height="5rem"
            aria-placeholder="Ihre Nachricht"
          />
          <q-btn color="primary" icon-right="send" label="Absenden" />
        </div>
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
      name: ''
    }
  }
}
</script>
