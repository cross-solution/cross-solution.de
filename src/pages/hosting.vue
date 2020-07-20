<template>
  <q-page padding>
    <h1>{{$t('Video Conferencing')}}</h1>
    <div class="row q-gutter-md">
      <div class="col-md-12">
        <p>
          Alle Betreiber von Videokonferenzen können mithöhren. Das liegt in der
          Natur der Sache. Wenn man ausschließen möchte, dass Dritte Konferenzen
          mithören können, muss man sein Konferenzsystem selbst betreiben.
        </p>
        <p>
          Jitsi eignet sich für Videocalls, insbesondere für <a href="/job-interviews">Bewerbungsgespräche</a>,
          weil ein Bewerber nur den Link zum Konferenzraum benötigt. Die Einigung auf ein
          Konferenzsystem entfällt. Man nimmt eifach das eigene.
        </p>
      </div>
    </div>
    <h2>Jitsi</h2>
    <div class="row">
    <div class="col-md-6">
      <a href="https://jitsi.org">Jitsi</a> ist eine quelloffene
      Videokonferenz Lösung. Sie bietet:
      <ul>
        <li>Video- bzw. Sprachkommunikation mit einen oder mehreren Teilnehmern</li>
        <li>Freigabe des Desktops, bestimmter Fenster uder Tabs im Browser</li>
        <li>Chat Funktion, um Textnachrichten mit anderen Teilnehmern auszutauschen.</li>
        <li>Apps für Mobile Endgeräte unter iOS und Android</li>
        <li>
          <a href="https://chrome.google.com/webstore/detail/jitsi-meetings/kglhbbefdnlheedjiejgomgmfplipfeb">Browserextension</a>
          für die Anbindung eines Kalenders, um Termine abzustimmen.
        </li>
      </ul>
      <div>
        Für die Nutzung wird eine Kamera und ein Mikrofon benötigt.
      </div>

      <div class="text-center">
        <h3>Testen Sie Jitsi</h3>
        <q-btn rounded type="a" size="xl" href="https://confi.cross-solution.de/" target="_blank" label="Konferenz starten" color="primary" />
      </div>

    </div>
      <div class="col-6">
        <q-carousel
        animated
        v-model="slide"
        arrows
        infinite
        control-color="secondary"
        transition-prev="slide-right"
        transition-next="slide-left"
        height="500px"
        >
        <q-carousel-slide :name="1" img-src="jitsi-screenshot.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Konferenzraum</div>
            <div class="text-subtitle1">mehrere Teilnemer</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="jitsi-desktop-sharing.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Bildschirmfreigabe</div>
            <div class="text-subtitle1">Freigabe des Bildschirms oder Fenstern</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="jitsi-chat.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Chat</div>
            <div class="text-subtitle1">Textnachrichten können gesendet werden</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="jitsi-bex.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Erstellung Einladung</div>
            <div class="text-subtitle1">per Browser Extension</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      </div>
    </div>
    <div style="margin-top: 50px;" class="row">
      <div>
        Im Demo können Sie Konferenzen eröffnen und sich mit anderen Teilnehmen
        treffen. Die Konferenzdaten durchlaufen unseren Jitsi Server. Konferenzen
        werden selbstverständlich nicht aufgezeichnet.

        Im einfachsten Fall stellen wir Ihnen ein System unter Ihrer Domain zur
        Verfügung. Natürlich installieren wir die Konferenzlösung auch auf ihrer
        Hardware. Gerne können wir Details in einer Konferenz besprechen. Aber
        natürlich auch telefonisch unter 069-71910361.
      </div>
    </div>
    <h2>Wir installieren Jitsi</h2>
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

<script>
import Products from '../components/Products.vue'
import ProductDescription from '../components/ProductDescription.vue'
import Data from '../assets/jitsi.json'

export default {
  name: 'Hosting',
  data () {
    return {
      slide: 1,
      products: Data
    }
  },
  components: {
    Products,
    ProductDescription
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
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: left
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
