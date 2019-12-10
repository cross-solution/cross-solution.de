<template>
  <q-page padding>
    <h1>Bewerben</h1>
    <div>
      So könnte ein Bewerbungsformular ausshen. Es besteht aus verschiedenen
      Komponenten.
    </div>

    <div class="row">
      <h2 class="col-md-12">Persönliche Daten</h2>

      <div class="col-md-10 col-sm-12">
        <div class="row q-gutter-xs">
          <y-address />
        </div>
      </div>
      <div class="col-md-2">
        <q-uploader
          label="Bild Upload"
          url="http://localhost:4444/upload"
          style="max-width: 300px"
        />
      </div>
    </div>
    <h2>Anschreiben</h2>
    <q-editor v-model="editor" min-height="5rem" placeholder="Anschreiben" />
    <h2>Dokumente</h2>
    <q-uploader
      url="http://localhost:4444/upload"
      label="Anlagen zur Bewerbung"
      multiple
      style="max-width: 300px"
    />
    <h2>Sonstige Angaben</h2>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input
        label="frühester Eintrittstermin"
        filled
        v-model="date"
        hint="wann können Sie anfangen?"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-separator />

    <q-item tag="label" v-ripple>
      <q-item-section avatar top>
        <q-checkbox v-model="cc" val="primary" color="primary" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Blindkopie</q-item-label>
        <q-item-label caption>
          Bitte senden Sie mir meine übermittelten Daten per CC.
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item tag="label" v-ripple>
      <q-item-section avatar top>
        <q-checkbox v-model="privacy" val="primary" color="primary" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Datenschuz</q-item-label>
        <q-item-label caption>
          ich habe die Datenschutzbestimmungen gelesen und akzeptiere Sie
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
    <q-btn color="info" icon-right="cancel" label="Voransicht" />
    <q-btn color="warning" icon-right="cancel" label="Abbrechen" />
    <q-btn color="primary" icon-right="send" label="Berwerbung absenden" />
  </q-page>
</template>

<script lang="javascript">

import YAddress from '../components/Form/Address.vue'

export default {
  meta: {
    'title': 'Bewerben'
  },
  name: 'Apply',
  data () {
    return {
      model: null,
      gender: [
        'Herr', 'Frau', 'Diverse'
      ],
      editor: 'Ihr Anschreiben',
      privacy: false,
      cc: false,
      date: ''
    }
  },
  components: {
    YAddress
  }
}
</script>
