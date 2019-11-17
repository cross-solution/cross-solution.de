<template>
  <q-page class="flex items-start">
    <q-carousel
      class="full-width"
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide
        name="first"
        img-src="statics/frankfurt-im-nebel.jpg"
      >
        <div class="absolute-top custom-caption">

          <div class="text-h2">Full Stack Development</div>
          <div class="text-subtitle1">IT Lösungen von CROSS Solution</div>
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
    <q-page-container class="row text-center q-gutter-md">

      <products
        v-for="product in products"
        v-bind:key="product.title"
        v-bind="product"
      />

    </q-page-container>
  </q-page>
</template>

<script>
import Products from '../components/Products.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'first',
      products: [
        {
          title: 'Software Entwicklung',
          subtitle: 'Fontend Backend',
          icons: [
            {
              name: 'fab fa-yarn',
              tooltip: 'Yarn'
            },
            {
              name: 'fab fa-vuejs',
              tooltip: 'Vue'
            },
            {
              name: 'fab fa-symfony',
              tooltip: 'symfony'
            },
            {
              name: 'fab fa-react',
              tooltip: 'react'
            },
            {
              name: 'fab fa-python',
              tooltip: 'python'
            },
            {
              name: 'fab fa-node-js',
              tooltip: 'nodejs'
            },
            {
              name: 'fab fa-php',
              tooltip: 'PHP'
            }
          ]
        }, {
          title: 'Voip, Messenger',
          subtitle: 'Kommunikation',
          icons: [
            {
              name: 'fab fa-gitter',
              tooltip: 'Gitter'
            },
            {
              name: 'fas fa-asterisk',
              tooltip: 'Asterisk'
            },
            {
              name: 'fab fa-slack',
              tooltip: 'slack'
            }
          ],
          text: 'Asterisk, Freeswitch, Kamailio, Snom, Aastaro, Mitel, Patton SmartNode, GOfax.IP'
        }, {
          title: 'DevOps',
          subtitle: 'damit es rund läuft',
          icons: [
            {
              name: 'fab fa-gitlab',
              tooltip: 'gitlab'
            },
            {
              name: 'fab fa-git-alt',
              tooltip: 'Git'
            },
            {
              name: 'fab fa-github',
              tooltip: 'GitHub'
            },
            {
              name: 'fab fa-docker',
              tooltip: 'Docker'
            }
          ],
          text: 'Proxmox, Kubernets, Openstack, Jest, Travis, Coverall, PHPunit, Cypress, Behat, LXC'
        }, {
          title: 'Design',
          subtitle: 'vom Auge zum Hirn',
          icons: [
            {
              name: 'fab fa-sass',
              tooltip: 'sass'
            },
            {
              name: 'fab fa-font-awesome-flag',
              tooltip: 'Font Awesome'
            },
            {
              name: 'fab fa-bootstrap',
              tooltip: 'Bootstrap'
            },
            {
              name: 'fab fa-less',
              tooltip: 'less'
            }
          ],
          text: 'Material Design'
        },
        {
          title: 'Recruiting',
          subtitle: 'wer macht die Arbeit?',
          icons: [
            {
              name: 'fas fa-globe',
              tooltip: 'remote work'
            }
          ],
          text: 'Sie möchten klassisch über Stellenbörsen eine Stellenanzeige schalten?'
        }

      ]
    }
  },
  components: {
    Products
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

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.my-card
  width: 100%
  max-width: 250px
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)

.icons
  font-size: 4em
</style>
