<template>
  <q-card class="products col-md-4">
    <q-card-section>
      <div class="text-h6 text-center">{{ title }}</div>
      <div class="text-subtitle2 text-center">{{ subtitle }}</div>
      <div class="icons text-center">
        <q-icon
          :name="icon.name"
          v-for="icon in icons"
          v-bind:key="icon.name"
          v-bind="icon"
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
$orange: #faa427
$fontColor: #555

.btn-icon
  width: 30px

.products
  background-color: #EEF4FB
  font-color: $fontColor

.q-icon
  line-height: 1
  width: 1em
  height: 1em
  letter-spacing: normal
  text-transform: none
  white-space: nowrap
  word-wrap: normal
  direction: ltr
  text-align: center
  position: relative
  color: $orange
  font-size: 31px
  padding-right: 7px
</style>
