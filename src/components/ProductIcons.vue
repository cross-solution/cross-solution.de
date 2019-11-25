<template>
  <div class="icons text-center q-gutter-sm">
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
</template>

<script>

export default {
  props: {
    icons: Array
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

.q-card__section h2
  font-family: "Heebo", sans-serif
  font-weight: 400
  color: #555
  font-size: 23px
  padding-top: 0px
  margin-bottom: 0px
  line-height: normal

.q-card__section h3
  font-family: "Heebo", sans-serif
  font-weight: 400
  color: #555
  padding: 0px
  margin-top: 0px
  margin-bottom: 20px
  font-size: 17px
  line-height: normal

</style>
