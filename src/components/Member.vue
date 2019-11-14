<template>
  <q-card class="col-auto">

    <q-img :src="image" />

    <q-card-section>
      <div class="text-h6">{{ name }}</div>
      <div class="text-subtitle2">{{ title }}</div>
    </q-card-section>

    <q-card-section>
      {{ slogan }}
    </q-card-section>

    <q-card-actions align="around">
      <q-btn
        push
        v-for="button in buttons"
        v-bind:key="button.text"
        v-bind="button.link"
        @click.native="openUrl(button.link)"
      >
        <q-icon :name="button.name" />
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    image: String,
    slogan: String,
    buttons: Array
  },
  methods: {
    openUrl (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="sass" scoped>
.btn-icon
  width: 30px
</style>
