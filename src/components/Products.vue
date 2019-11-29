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
    <q-card-actions align="center">
      <q-btn class="button" outline round color="primary" @click="onGotoButtonClick"
        ><i class="fas fa-chevron-down"></i>
      </q-btn>
    </q-card-actions>
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
    text: String,
    id: String
  },
  components: {
    ProductIcons
  },
  methods: {
    onGotoButtonClick () {
      this.$emit('goto', this.id)
    }
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

.button
  border: 2px solid $primary
  opacity: 0.8
</style>
