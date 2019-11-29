<template>
  <q-card flat class="products col-md-3 col-lg-2 col-sm-4 col-xs-11">
    <q-card-section>
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <div>
        <product-icons :icons="icons" />
      </div>
      <div class="text-left">{{ text }}</div>
    </q-card-section>
    <div class="btn-products">
    <q-card-actions align="center">
      <q-btn class="button" outline round color="blue">
       <i class="fas fa-chevron-down"></i>
      </q-btn>
    </q-card-actions>
    </div>
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

.products
  background-color: $light-blue-1
  color: $text-grey-9
  border-radius: 10px
  border: none

h2
  font-weight: 400
  font-size: 23px
  padding-top: 0
  margin-bottom: 0
  line-height: normal

h3
  font-weight: 400
  padding: 0
  margin-top: 0
  margin-bottom: 20px
  font-size: 17px
  line-height: normal
.text-left
  font-size: 14px
  margin-top: 10px
  margin-bottom: 20%
.q-card
  position:relative
.fas
    font-family: 'Font Awesome 5 Free'
    font-weight: 601
    font-size: 16px
.btn-products
  width: 20%
  position: absolute
  margin-left: 38%
  bottom: 0
.button
  border: 2px solid $blue
  opacity: 0.7

</style>
