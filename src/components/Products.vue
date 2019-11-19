<template>
  <q-card
    flat
    class="products col-md-3 col-lg-2 col-sm-4 col-xs-11"
  >
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ subtitle }}</div>
      <div class="icons text-center q-gutter-md">
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
            {{ icon.tooltip }}
          </q-tooltip>
        </q-icon>
      </div>
      <div class="text-left"> {{ text }} </div>
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
  color: $fontColor
  border-radius: 10px
  border: none

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
