<template>
  <div class="icons text-center q-gutter-sm">
    <q-icon
      :name="icon.name"
      v-for="icon in icons"
      v-bind:key="icon.name"
      v-bind="icon"
    >
      <q-tooltip transition-show="rotate" transition-hide="scale">
        {{ icon.tooltip }}
      </q-tooltip>
    </q-icon>
  </div>
</template>

<script>
export default {
  props: {
    icons: Array
  }
}
</script>

<style lang="sass" scoped>

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
  color: $secondary
  font-size: 31px
  padding-right: 7px
</style>
