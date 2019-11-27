<template>
  <q-card
    flat
    class="products col-md-3 col-lg-2 col-sm-4 col-xs-11"
  >
    <q-card-section>
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <div>
        <product-icons :icons="icons" />
      </div>
      <div class="text-left">{{ text }}</div>
    </q-card-section>
    <q-card-action align="center">
      <q-btn
        class="mybutton"
        outline
        round
        color="primary"
      ><i class="fas fa-chevron-down"></i>
      </q-btn>
    </q-card-action>
  </q-card>
</template>

<script lang="javascript">

import ProductIcons from '../components/ProductIcons.vue'

export default {
  props: {
    name: String,
    title: String,
    subtitle: String,
    icons: Array,
    text: String
  },
  components: {
    ProductIcons
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
.mybutton
  border: 2px solid $primary
  opacity: 0.8
</style>
