<template>
  <div class="icons text-center q-gutter-sm">
    <span
      :name="icon.name"
      v-for="icon in icons"
      v-bind:key="icon.name"
      v-bind="icon"
    >
      <q-icon :name="icon.name"/>
      <q-tooltip transition-show="rotate" transition-hide="scale">
        {{ icon.tooltip }}
      </q-tooltip>
    </span>
    <div class="price">{{price}}</div>
  </div>
</template>

<script>
export default {
  props: {
    icons: Array,
    price: String
  }
}
</script>

<style lang="sass" scoped>

.q-icon
  line-height: 1
  width: .9em
  height: 1em
  letter-spacing: normal
  text-transform: none
  white-space: nowrap
  word-wrap: normal
  text-align: center
  color: $secondary
  font-size: 31px
  padding-right: 7px
.price
  font-size: 40px
</style>
