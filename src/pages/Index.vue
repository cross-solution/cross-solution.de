<template>
  <q-page class="flex items-start">
    <q-carousel class="full-width" animated v-model="slide" height="400px">
      <q-carousel-slide
        name="first"
        img-src="statics/frankfurt-im-nebel.jpg"
        class="text-white"
      >
        <div class="absolute-center text-center">
          <div class="text-h2">Full Stack Development</div>
          <div class="text-subtitle1">
            solide IT Lösungen von <span class="bold">CROSS</span> Solution
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-page-container class="row text-center q-gutter-md justify-center">
      <products
        v-for="product in products"
        v-bind:key="product.title"
        v-bind="product"
      />
    </q-page-container>

    <q-page-container class="row text-center q-gutter-xs justify-center">
      <product-description
        v-for="product in products"
        v-bind:key="product.title"
        v-bind="product"
      />This is in parent component {{ count }}
    </q-page-container>

    <div class="cs-cover-layer">
      <div class="cs-cover-border-top"></div>
      <div id="introduction">
        <div id="animation">
          <span class="bold">CROSS</span>
          <span class="font-weight: 700;"> Solution</span>
        </div>
      </div>
      <div class="cs-cover-border-bottom"></div>
    </div>
  </q-page>
</template>

<script lang="javascript">
import Products from '../components/Products.vue'
import ProductDescription from '../components/ProductDescription.vue'
import Data from '../assets/products.json'

export default {
  name: 'PageIndex',
  data () {
    return {
      count: null,
      slide: 'first',
      products: Data
    }
  },
  components: {
    Products,
    ProductDescription
  },
  computed: {
    style () {
      return {
        width: '320px',
        height: '220px',
        backgroundImage: 'url(../statics/bgimg.jpg)',
        padding: '10px',
        border: '10px solid #fff',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icons {
  font-size: 4em;
}

html,
body {
  height: 100%;
  width: 100%;
  /* Set the height to match that of the viewport. */
  height: 100vh;
  /* Set the width to match that of the viewport. */
  width: 100vw;
  /* Remove any browser-default margins. */
  margin: 0;
}
body {
  overflow-x: hidden;
}
.bold {
  font-family: "Archivo Black", sans-serif;
}
.cs-cover-layer {
  animation-name: gotop;
  animation-delay: 1.5s;
  animation-duration: 0.7s;
  animation-fill-mode: both;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: $primary;
  border-top: 10px solid #faa427;
  border-bottom: 10px solid #faa427;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#introduction {
  color: #fff;
  position: absolute;
  font-size: 500%;
}

#introduction {
  animation-name: FadeScaleOut;
  animation-delay: 0s;
  animation-duration: 1s;
  display: table;
}
#animation {
  text-align: center;
  vertical-align: top;
  display: table-cell;
}
.light-blue {
  background-color: $light-blue-1;
}
.orange {
  background-color: $orange-1;
}
@keyframes FadeScaleOut {
  0% {
    transform: scale(0, 0);
  }

  100% {
    transform: scale(1, 1);
  }
}
@keyframes gotop {
  0% {
    height: 96.8vh;
    opacity: 1;
    top: 0;
  }

  100% {
    height: 0;
    display: none;
    opacity: 1;
    top: -100vh;
  }
}
#content_row {
}
#content_row h1 {
  text-align: center;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 35px;
  margin-top: 2rem;
}
#content_row a {
  text-decoration: none;
  opacity: 1;
  color: #5498d7;
  background-color: #fff;
}

@-webkit-keyframes simpleFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes simpleFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
