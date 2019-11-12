<template>
  <div class="row items-start">
    <div class=" row col-md-8 q-px-lg q-pb-md items-start q-gutter-x-md items-start">
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

      <q-separator horizontal />

      <member
        v-for="member in members"
        v-bind:key="member.name"
        v-bind="member"
      />

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
      <div>
        <h3>Werte</h3>
      </div>
    </div>
    <div class="col-md-4">
      <timeline />
    </div>
  </div>
</template>

<script>

import Timeline from '../components/Timeline.vue'
import Member from '../components/Member.vue'

export default {
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  data () {
    return {
      members: [
        {
          name: 'Carsten Bleek',
          title: 'Inhaber, Dipl. Ing. Informatik',
          image: 'statics/team/carsten_bleek.jpg',
          slogan: "Let's work together",
          buttons: [{
            src: 'statics/icons/github.svg',
            link: 'https://github.com/cbleek',
            text: 'Github'
          },
          {
            src: 'statics/icons/linkedin.svg',
            link: 'https://www.linkedin.com/in/cbleek/',
            text: 'LinkedIn'
          },
          {
            src: 'statics/icons/xing.svg',
            link: 'https://www.xing.com/profile/Carsten_Bleek',
            text: 'Xing'
          }]
        },
        {
          name: 'Mathias Gelhausen',
          title: 'Software Developer',
          image: 'statics/team/mathias.jpg',
          slogan: "Let's code together",
          buttons: [{
            src: 'statics/icons/github.svg',
            link: 'https://github.com/tisie',
            text: 'Github'
          }]
        },
        {
          name: 'Wlad Korolew',
          title: 'Designer',
          image: 'statics/team/mathias.jpg',
          slogan: 'Design muss sein',
          buttons: [{
            src: 'statics/icons/github.svg',
            link: 'https://github.com/Steinbach2019',
            text: 'Github'
          }]
        }
      ]
    }
  },
  components: {
    Timeline,
    Member
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
.btn-icon
  width: 40px
</style>
