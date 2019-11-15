<template>
  <q-card
    class="my-card text-white "
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ subtitle }}</div>
      <div class="fa-4x">
        <q-icon
          :name="icon.name"
          v-for="icon in icons"
          v-bind:key="icon.name"
          v-bind="icon.name"
        >
          <q-tooltip
            transition-show="rotate"
            transition-hide="scale"
          >
            {{icon.tooltip}}
          </q-tooltip>
        </q-icon>
      </div>
      <div> {{ text }} </div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  props: {
    name: String,
    title: String,
    subtitle: String,
    icons: Array,
    text: String
  }
}
</script>

<style lang="sass" scoped>
.btn-icon
  width: 30px

</style>
