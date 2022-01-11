<template>
  <q-page padding>
    <div class="row col-12">
      <h1>Stellenanzeige für Google Jobs erstellen</h1>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <p>
          Sie möchten Stellenanzeigen auf Google Jobs veröffentlichen? Mit dem
          Jobwizard können sie Stellenanzeigen erstellen, verwalten und veröffentlichen.
          Die Anzeigen erfüllen die Spezifikation für Google Jobs und können dort veröffentlicht
          werden.
        </p>
        <ul>
          <li>Stellenanzeigen mit eigenem Logo</li>
          <li>Integriertes Markup für Google Jobs</li>
          <li>Responsive. Optimiert für das Handy und den Desktop</li>
          <li>kostenlos</li>
        </ul>
        <p>
          Der Jobwizard ermöglicht es Bilder und Farben anzupassen.
          Individuelle Anpassungen machen wir gerne.
        </p>
        <p>Jetzt ausprobieren!</p>
        <p class="text-center">
          <q-btn type="a" target="__blank" color="secondary" href="https://jobwizard.yawik.org/">kostenlos Stellenanzeige eingeben</q-btn>
        </p>
      </div>
      <div class="col-6">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
        >
          <q-carousel-slide :name="1" img-src="../assets/screens/job1-general.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Titel</div>
              <div class="text-left text-subtitle1">Anzeigentitel und Bewerbungsadresse</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="../assets/screens/job2-details.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Anzeigentext</div>
              <div class="text-left text-subtitle1">Aufgaben, Anforderungen, Vorteile</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="../assets/screens/job3-preview.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Vorschau</div>
              <div class="text-left text-subtitle1">Voransicht und Farbgestaltung</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'JobPost',
  'meta': {
    'title': 'Eingabetool für Google Jobs.',
    'meta': {
      'description': {
        name: 'description',
        content: 'Kostenlos Stellenanzeigen erstellen. Optimiert für Google, responsive, mit eigenem Logo'
      }
    }
  },
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>
