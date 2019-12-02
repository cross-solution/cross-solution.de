<template>
  <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
    <div class="address">
      <div class="row q-gxutter-x-md col-md-#12 myclass">
        <div class="col-md-2">
          <q-select
            outlined
            v-model="gender"
            color="$blue"
            :options="options"
            label="Anrede"
            :rules="[true]"
          />
        </div>
        <div class="col-md-10 col-sm-6" />
        <div class="col-12">
          <q-input
            outlined
            v-model="firstname"
            label="Name *"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-12">
          <q-input
            outlined
            v-model="lastname"
            label="Vorname *"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-8">
          <q-input
            outlined
            v-model="street"
            label="Strasse *"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-3">
          <q-input
            outlined
            v-model="housenumber"
            label="Hausnummer *"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-2">
          <q-input
            outlined
            v-model="postalcode"
            label="Plz.*"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-10" style="margin-left: 5px;">
          <q-input
            outlined
            v-model="city"
            label="Ort*"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-12">
          <q-input
            outlined
            label="Email*"
            lazy-rules
            :rules="[val => !!val || 'Pflichtfeld']"
          />
        </div>
        <div class="col-12">
          <q-input outlined label="Phone" />
        </div>
        <div class="col-12">* Pflichtfelder</div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.myclass {
  max-width: 45%;
}
</style>

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
