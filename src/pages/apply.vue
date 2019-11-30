<template>
  <q-page padding>
    <h1>Bewerben</h1>
    <div class="row q-gatter-md">
      <h2 class="col-md-12">Persönliche Daten</h2>
      <div class="col-md-2">
        <q-select v-model="model" :options="gender" label="Anrede" />
      </div>
      <div class="col-md-10" />
      <div class="col-md-6">
        <q-input filled v-model="firstname" label="Firstname" />
      </div>
      <div class="col-md-6">
        <q-input filled v-model="lastname" label="Lastname" />
      </div>
      <div class="col-md-10">
        <q-input filled v-model="street" label="Strasse" />
      </div>
      <div class="col-md-2">
        <q-input filled v-model="housenumber" label="Hausnummer" />
      </div>
      <div class="col-md-2">
        <q-input filled v-model="postalcode" label="Plz." />
      </div>
      <div class="col-md-10">
        <q-input filled v-model="postalcode" label="Ort" />
      </div>
      <div class="col-md-6">
        <q-input filled v-model="email" label="Email" />
      </div>
      <div class="col-md-6">
        <q-input filled v-model="phone" label="Phone" />
      </div>
    </div>
    <h2>Anschreiben</h2>
    <q-editor v-model="editor" min-height="5rem" placeholder="Anschreiben" />
    <h2>Dokumente</h2>
    <h3>Blindkopie</h3>
    <h3>Datenschutzbestimmungen</h3>
  </q-page>
</template>

<script lang="javascript">
export default {
  name: 'Apply',
  data () {
    return {
      model: null,
      gender: [
        'Herr', 'Frau', 'Diverse'
      ],
      editor: 'Ihr Anschreiben'
    }
  }
}
</script>
