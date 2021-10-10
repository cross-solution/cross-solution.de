<template>
  <q-page padding>

    <h1>{{$t('Indivitual Application Forms')}}</h1>
    <div class="row q-col-gutter-md">
       <div class="col-6">
    <p>
      Sie schalten Stellenanzeigen noch mit einer Email Adresse? Ein individuelles
      Bewerbungsfomular im eigenen Design muss nicht teuer sein. Bei uns bekommen
      Sie es in individuelles Bewerbungsformular zum Festpreis von 499,- zzgl MwSt.
    </p>
    <ul>
       <li>Sie müssen nicht mehr die E-Mail für Bewerbungen veröffentlichen. Das schützt vor ungewünschten E-Mails.</li>
       <li>Sie können individuelle Fragen stellen und dadurch Rückfragen vermeiden.</li>
       <li>Sie erhalten Bewerbung in einer einheitlicheren Form.</li>
       <li>Sie können einfach feststellen, über welches Jobportal eine Bewerbung kam?</li>
    </ul>
    <p>
      Nennen Sie uns die Felder und Fragen, die im Formular erscheinen sollen. Wir
      entnehmen Logos, Schriftarten und Styles Ihrer Homepage. Und bereits in einer
      Woche haben Sie ein Bewerbungsformular, welches sie zukünftig für all ihre
      Stellenanzeigen bis zu einem Volumen von 1000 Bewerbungen pro Monat Nutzen kostenlos
      einsetzen können.
    </p>
    <p>
      Ein Beispiel Formular:
    </p>
    <p class="text-center">
      <q-btn color="secondary" type="a" href="https://form.yawik.org">Bewerbungsformular testen</q-btn>
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
          <q-carousel-slide :name="1" img-src="../assets/screens/screen1-contact.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Kontakt</div>
              <div class="text-left text-subtitle1">Adressedaten</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="../assets/screens/screen2-coverletter.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Anschreiben</div>
              <div class="text-left text-subtitle1">das Anschreiben</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="../assets/screens/screen3-attachments.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Anhänge</div>
              <div class="text-left text-subtitle1">Zeugnisse und Fotos</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" img-src="../assets/screens/screen4-preview.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Voransicht</div>
              <div class="text-left text-subtitle1">noch mal alles prüfen.</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="5" img-src="../assets/screens/screen5-privacy.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">DSGVO</div>
              <div class="text-left text-subtitle1">Datenschutz</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="6" img-src="../assets/screens/screen6-questions.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-left text-h2">Fragen</div>
              <div class="text-left text-subtitle1">individuell anpassbar.</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'ApplicationForm',
  'meta': {
    'title': 'Individuelle Bewerbungsformulare zum Festpreis.',
    'meta': {
      'description': { name: 'description', content: 'Bewerbungsformulare im eigenen Design und mit individuellen Fagen zum Festpreis.' }
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
