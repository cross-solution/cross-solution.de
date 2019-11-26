<template>
  <article
    class="q-page-container col-12 text-center q-gutter-md full-size justify-center"
    v-bind:class="bg"
  >
    <h1 class="text-center">{{ title }}</h1>
    <product-icons :icons="icons" />

    <div class="content-info">
      <span v-if="description">{{ description }}</span>
      <span v-else v-for="n in 5" :key="n">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
        praesentium molestias a adipisci, dolore vitae odit, quidem consequatur
        optio voluptates asperiores pariatur eos numquam rerum delectus commodi
        perferendis voluptate?
      </span>
    </div>
    <div class="btn-touch">
      <a class="btn_02 btn_01" href="/contact">Get in touch!</a>
    </div>
  </article>
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
    description: String,
    bg: String
  },
  data () {
    return {
      result: this.$vnode.key
    }
  },
  components: {
    ProductIcons
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 35px;
  margin-top: 2rem;
}
a {
  text-decoration: none;
  background-color: #fff;
}
article {
  width: 10 0%;
  margin: 0 auto;
  border: 1px solid $orange-1;
}
.btn-touch {
  position: relative;
  text-align: center;
  width: 100%;
  margin-bottom: 3.5rem;
}
.btn_01 {
  cursor: pointer;
  color: #555;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn_01 {
  position: relative;
  text-transform: uppercase;
  border: 1px solid #5498d7;
  padding: 1rem 2rem;
  font-size: 1rem;
  letter-spacing: 2px;
  -webkit-transition: opacity 0.25s, background-color 0.25s;
  transition: opacity 0.25s, background-color 0.25s;
  font-weight: 400;
  font-family: "Archivo Black", sans-serif;
}
.btn_01:hover::before,
.btn_01:hover::after {
  width: 100%;
  height: 100%;
}
.btn_01:before,
.btn_01:after {
  content: "";
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.5s, height 0.5s;
  transition: width 0.5s, height 0.5s;
}
.btn_01:before {
  top: 0;
  right: 0;
  border-top-color: #5498d7;
  border-right-color: #5498d7;
  opacity: 0.8;
}
.btn_01:after {
  left: 0;
  bottom: 0;
  border-bottom-color: #5498d7;
  border-left-color: #5498d7;
  opacity: 0.8;
}
.btn_01:hover:before,
.btn_01:hover:after {
  width: 100%;
  height: 100%;
}
.content-info {
  font-weight: 300;
  font-size: 18px;
  width: 70%;
  margin: 30px auto;
  line-height: 1.6rem;
}
.blue {
  background-color: $light-blue-1;
}
</style>
