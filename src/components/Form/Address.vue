<template>
  <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
    <div class="address">
      <div class="row q-col-gutter-x-md">
        <div class="col-md-2 col-sm-6 col-xs-12">
          <q-select
            outlined
            v-model="gender"
            color="$blue"
            :options="options"
            label="Anrede"
            :rules="[true]"
          />
        </div>
        <div class="col-md-10 col-sm-6 col-xs-6" />
        <div class="col-md-6 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="firstname"
            label="Vorname"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="lastname"
            label="Nachname"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-lg-10 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="street"
            label="Strasse"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-lg-2 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="housenumber"
            label="Hausnr."
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-lg-2 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="postalcode"
            label="Plz."
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-lg-10 col-sm-6 col-xs-12">
          <q-input
            outlined
            v-model="city"
            label="Ort"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-lg-12 col-sm-6 col-xs-12">
          <q-input
            outlined
            type="email"
            label="E-Mail*"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
            v-model="email"
          />
        </div>
        <div class="col-lg-12 col-sm-6 col-xs-12">
          <q-input outlined label="Telefon" />
        </div>
        <!--<div class="col-12">* Pflichtfelder</div>-->
      </div>
    </div>
  </form>
</template>

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
