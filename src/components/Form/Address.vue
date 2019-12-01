<template>
  <div class="address">
    <div class="row">
      <div class="col-md-2 col-sm-6">
        <q-select v-model="gender" :options="options" label="Anrede" />
      </div>
      <div class="col-md-10 col-sm-6" />
      <div class="col-6">
        <q-input filled v-model="firstname" label="Firstname" />
      </div>
      <div class="col-6">
        <q-input filled v-model="lastname" label="Lastname" />
      </div>
      <div class="col-10">
        <q-input filled v-model="street" label="Strasse" />
      </div>
      <div class="col-2">
        <q-input filled v-model="housenumber" label="Hausnummer" />
      </div>
      <div class="col-2">
        <q-input filled v-model="postalcode" label="Plz." />
      </div>
      <div class="col-10">
        <q-input filled v-model="city" label="Ort" />
      </div>
      <div class="col-6 col-xs-12">
        <q-input filled v-model="email" label="Email" />
      </div>
      <div class="col-6 col-xs-12">
        <q-input filled v-model="phone" label="Phone" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="javascript">

export default {
  name: 'Address',
  data () {
    return {
      gender: '',
      options: [
        'Herr', 'Frau', 'Diverse'
      ],
      phone: '',
      email: '',
      postalcode: '',
      city: '',
      housenumber: '',
      firstname: '',
      lastname: '',
      street: ''
    }
  }
}
</script>
