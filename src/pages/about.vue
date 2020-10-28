<template>
  <q-page padding>
    <h1>Das Team</h1>
    <div class="row q-gutter-md">
      <div class="col-md-12">
        <p>
          CROSS ist ein Netzwerk aus IT Spezialisten mit Jahrzehnte langer
          Erfahrung in der Konzeption und Umsetzung komplexer IT Systeme. Wir
          entwickeln für unsere Kunden Komplett-Lösungen und setzen dabei,
          wann immer es geht, auf bewährte Open Source Produkte. Warum? Es
          vereinfacht remote working, führt zu Standards und verbessert die
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
    <q-no-ssr>
      <vue-calendly url="https://calendly.com/cross-solution" :height="600"></vue-calendly>
    </q-no-ssr>
  </q-page>
</template>

<script lang="javascript">
import Vue from 'vue'
import VueCalendly from 'vue-calendly'
import Member from '../components/Member.vue'
import Data from '../assets/members.json'

Vue.use(VueCalendly)

export default {
  meta: {
    'title': 'Über uns',
    'meta': {
      'description': { name: 'description', content: 'Das Team von CROSS Solution.' }
    }
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
      members: Data
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
.profiles  lang
  width: 100%
  max-width: 350px
.btn-icon
  width: 40px
</style>
