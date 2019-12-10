<template>
  <q-page class="padding">
    <div class="row items-start">
      <div
        class="row col-md-8 q-px-lg q-pb-md items-start q-gutter-md items-start"
      >
        <div class="col-md-12 ">
          <h1>Über uns</h1>
          <p>
            CROSS ist ein Netzwerk aus IT Spezialisten mit Jahrzehnte langer
            Erfahrung in der Konzeption und Umsetzung komplexer IT Systeme. Wir
            entwickeln für unsere Kunden Komplett-Lösungen und setzen dabei,
            wann immer es geht, auf bewährte Open Source Produkte. Warum? Es
            vereinfacht remote working, führt zu standards und verbessert die
            Qualität. Dokumentation und ganz einfach die Zusammenarbeit mit
            unseren Kunden. Unser Leistungsspektrum umfasst die Konzeption und
            Umsetzung von Projekten, das Hosten von Internet Anwendungen und den
            anschliessenden Support. Mit uns bekommen Sie umfassende Qualität
            aus einer Hand.
          </p>
        </div>
        <div class="row q-gutter-md text-center">
          <member
            v-for="member in members"
            v-bind:key="member.name"
            v-bind="member"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="javascript">

import Member from '../components/Member.vue'

export default {
  meta: {
    'title': 'Über uns'
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm
        ? 'dense'
        : this.$q.screen.lt.md
          ? 'comfortable'
          : 'loose'
    }
  },
  data () {
    return {
      members: [
        {
          name: 'Carsten Bleek',
          title: 'Inhaber, Dipl. Ing. Informatik',
          image: 'statics/team/cbleek-460x460.jpeg',
          slogan: "Let's work together",
          buttons: [
            {
              name: 'fab fa-github',
              link: 'https://github.com/cbleek',
              text: 'Github'
            },
            {
              name: 'fab fa-linkedin',
              link: 'https://www.linkedin.com/in/cbleek/',
              text: 'LinkedIn'
            },
            {
              name: 'fab fa-xing',
              link: 'https://www.xing.com/profile/Carsten_Bleek',
              text: 'Xing'
            }
          ]
        },
        {
          name: 'Mathias Gelhausen',
          title: 'Software Developer',
          image: 'statics/team/TiSiE-460x460.jpeg',
          slogan: "Let's code together",
          buttons: [
            {
              name: 'fab fa-github',
              link: 'https://github.com/tisie',
              text: 'Github'
            }
          ]
        },
        {
          name: 'Anthonius Munthi',
          title: 'Software Developer',
          image: 'statics/team/kilip-460x460.jpeg',
          slogan: 'Working from home',
          buttons: [
            {
              name: 'fab fa-github',
              link: 'https://github.com/kilip',
              text: 'Github'
            },
            {
              name: 'fas fa-home',
              link: 'https://github.com/kilip',
              text: 'Home'
            }
          ]
        },
        {
          name: 'Wladimir Korolew',
          title: 'Designer',
          image: 'statics/team/korolew-211x211.jpeg',
          slogan: 'Design muss sein',
          buttons: [
            {
              name: 'fab fa-github',
              link: 'https://github.com/Steinbach2019',
              text: 'Github'
            },
            {
              name: 'fas fa-home',
              link: 'https://korolew.de',
              text: 'Home'
            }
          ]
        }
      ]
    }
  },
  components: {
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
