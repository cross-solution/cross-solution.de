<template>
  <q-page class="flex items-start">
    <div class="cs-cover-layer" v-if="coverpage()">
      <div class="cs-cover-border-top"></div>
      <div id="introduction">
        <div id="animation">
          <span class="bold">CROSS</span>
          <span class="font-weight: 700;"> Solution</span>
        </div>
      </div>
      <div class="cs-cover-border-bottom"></div>
    </div>
    <q-carousel class="full-width" animated v-model="slide" height="50vh">
      <q-carousel-slide
        name="first"
        img-src="statics/frankfurt-im-nebel.jpg"
        class="text-white"
      >
        <div class="absolute-center text-center">
          <div class="claim">Full Stack Development</div>
          <div class="claim-subtitle">
            solide IT Lösungen von <span class="bold">CROSS</span> Solution
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-page-container
      class="row text-center q-gutter-md justify-center"
      id="top"
    >
      <products
        v-for="product in products"
        v-bind:key="product.title"
        v-bind="product"
        @goto="scrollToElement"
      />
    </q-page-container>

    <q-page-container class="row text-center q-gutter-xs justify-center">
      <product-description
        v-for="product in products"
        v-bind:key="product.title"
        v-bind="product"
        @goto="scrollToTop"
      />
    </q-page-container>
  </q-page>
</template>

<script lang="javascript">
import Products from '../components/Products.vue'
import ProductDescription from '../components/ProductDescription.vue'
import Data from '../assets/products.json'
import { scroll } from 'quasar'

export default {
  meta: {
    'title': 'Open Source @ CROSS Solution'
  },
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
  },
  methods: {
    scrollToElement (id) {
      const el = document.getElementById(id)
      const target = scroll.getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 100
      scroll.setScrollPosition(target, offset, duration)
    },
    scrollToTop () {
      this.scrollToElement('top')
    },
    coverpage: function () {
      if (this.$q.cookies.has('cover-page') !== true) {
        this.$q.cookies.set('cover-page', 'true', { expires: 5 * 365 })
        return true
      }
      else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icons {
  font-size: 4em;
}
/* needed for overlay */
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
  animation-duration: 3.7s;
  animation-fill-mode: both;
  position: fixed;
  top: -80;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
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
.claim {
  font-size: 4.5rem;
  line-height: 5.5rem;
}
.claim-subtitle {
  font-size: 1.3rem;
  line-height: 1.3678rem;
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

@media (max-width: 480px) {
  .claim {
    font-size: 2.75rem;
    font-weight: 400;
    line-height: 2.75rem;
    letter-spacing: 0;
  }
  .claim-subtitle {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 0.9rem;
    letter-spacing: 0m;
    margin-top: 8px;
  }
}
</style>
