<template>
  <q-page class="flex">
    <q-carousel
      class="full-width"
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Wir bieten maßgeschneiderte Web-Applikationen und komplexe System-Lösungen. Von der Beratung, der Entwicklung und dem anschließenden Support bieten wir umfassende IT Dienstleistungen aus einer Hand.
        Bei der Konzeption setzen wir, wann immer es geht, auf bewährte Open Source Technologien. Nicht nur die niedrigen Einsatzkosten sind dafür ausschlaggebend, sondern auch die Möglichkeit, notwendige Anpassungen am offen zugänglichen Quellcode durchführen zu können.
        Dies versetzt uns in die Lage, komplexe Projekte schnell und kostengünstig umzusetzen.
        Wir sind fair, offen und ehrlich, und wir konzentrieren uns nur auf das Wesentliche.
      </q-card-section>
    </q-card>
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Wir bieten maßgeschneiderte Web-Applikationen und komplexe System-Lösungen. Von der Beratung, der Entwicklung und dem anschließenden Support bieten wir umfassende IT Dienstleistungen aus einer Hand.
        Bei der Konzeption setzen wir, wann immer es geht, auf bewährte Open Source Technologien. Nicht nur die niedrigen Einsatzkosten sind dafür ausschlaggebend, sondern auch die Möglichkeit, notwendige Anpassungen am offen zugänglichen Quellcode durchführen zu können.
        Dies versetzt uns in die Lage, komplexe Projekte schnell und kostengünstig umzusetzen.
        Wir sind fair, offen und ehrlich, und wir konzentrieren uns nur auf das Wesentliche.
      </q-card-section>
    </q-card>
    <q-page-container>
    </q-page-container>

  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.my-card
  width: 100%
  max-width: 250px
</style>
