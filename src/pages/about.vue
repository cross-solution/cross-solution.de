<template>
  <div class="row">
    <div class="row col-md-8 q-px-lg q-pb-md items-start q-gutter-x-md items-start">
      <div class="col-md-12 ">
        <h1>Über uns</h1>
        <p>
          CROSS ist ein Netzwerk aus IT Spezialisten mit Jahrzehnte langer Erfahrung in der Konzeption und Umsetzung
          komplexer IT Systeme. Wir entwickeln für unsere Kunden Komplett-Lösungen und setzen dabei, wann immer es geht,
          auf bewährte Open Source Produkte. Warum?

          Es vereinfacht remote working, führt zu standards und verbessert die Qualität.

          Dokumentation und ganz einfach die Zusammenarbeit mit unseren Kunden.

          Unser Leistungsspektrum umfasst die Konzeption und Umsetzung von Projekten, das Hosten von Internet Anwendungen und den anschliessenden Support. Mit uns bekommen Sie umfassende Qualität aus einer Hand.
        </p>
      </div>

      <q-card class="col-auto">
        <img src="../statics/team/carsten_bleek.jpg">

        <q-card-section>
          <div class="text-h6">Carsten Bleek</div>
          <div class="text-subtitle2">Inhaber, Dipl. Ing. Informatik</div>
        </q-card-section>

        <q-card-section>
          dies und das
        </q-card-section>
      </q-card>

      <q-card class="col-auto">
        <img src="../statics/team/mathias.jpg">

        <q-card-section>
          <div class="text-h6">Mathias Gelhausen</div>
          <div class="text-subtitle2">Softwareentwickler Informatiker</div>
        </q-card-section>

        <q-card-section>
          dies und das
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card>

      <div class="col-md-4 col-xs-12 col-sm-6 ">

        <q-layout
          view="lHh Lpr lFf"
          container
          style="height: 400px"
          class="shadow-2 rounded-borders"
        >
          <q-header elevated>
            <q-bar>
              <q-icon name="laptop_chromebook" />
              <div>Timeline</div>

              <q-space />

              <q-btn
                dense
                flat
                icon="minimize"
              />
              <q-btn
                dense
                flat
                icon="crop_square"
              />
              <q-btn
                dense
                flat
                icon="close"
              />
            </q-bar>
          </q-header>

          <q-page-container>
            <q-page padding>

              <timeline />
              <!-- place QPageScroller at end of page -->
              <q-page-scroller
                position="bottom-right"
                :scroll-offset="150"
                :offset="[18, 18]"
              >
                <q-btn
                  fab
                  icon="keyboard_arrow_up"
                  color="accent"
                />
              </q-page-scroller>
            </q-page>
          </q-page-container>
        </q-layout>
      </div>

    </div>
    <div class="col-md-4">
      <timeline />
    </div>
  </div>
</template>

<script>

import Timeline from '../components/Timeline.vue'

export default {
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  components: {
    Timeline
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.profiles
  width: 100%
  max-width: 350px
</style>
