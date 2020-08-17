<template>
  <q-page padding>
    <h1>Bewerbungsgespräche online mit Jitsi</h1>
    <div class="row q-gutter-md">
      <div class="col-md-12">
        <p>
          Jitsi eignet sich sehr gut für Vorstellungs- oder Kennenlerngespräche per Videocall. Ein
          Kandidat benötigt lediglich einen Link. Eine Registrierung bei einem Drittanbieter entfällt.
          Da Jitsi auch per Smartphone nutzbar ist, steht einem einfachen Videocall praktisch
          nichts im Weg. Überzeugen sie sich in unserem Demo.
        </p>
      </div>
    </div>
    <h2>Unkompliziert und sicher zum Online Vorstellungsgespräch</h2>
    <div class="row">
      <div class="col-6">
        <p>Jitsi ist tatsächlich erfrischend unkompliziert zu bedienen.</p>
        <p>
          Sie erstellen einfach einen Konferenzraum mit einem eindeutigen Namen und senden den Link
          an den Kandidaten. Dieser ruft einfach den Link auf und schon kann das Gespräch beginnen.
        </p>

        <ul>
          <li>einfacher Datenschutz, weil keine Drittanbieter benötigt werden</li>
          <li>einfaches Handling. Keine Registrierung erforderlich</li>
          <li>einfache Integrierbarkeit. Weil Open Source.</li>
        </ul>
      </div>
      <div class="col-6">
        <q-carousel
          animated
          v-model="imgnr"
          arrows
          navigation
          infinite
          control-color="secondary"
          transition-prev="slide-right"
          transition-next="slide-left"
          padding
        >
          <q-carousel-slide :name="1" class="column no-wrap items-center">
            <ol><li>
                Eröffnen Sie einen neuen Konferenzraum. Vergeben Sie einen möglichst eindeutigen Namen.
            </li></ol>
            <q-img src="interview/interview1.png" contain />
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap items-center">
            <ol start="2"><li>
              Teilen Sie dem Kanditaten den Link zum Konferenzraum mit.
            </li></ol>
            <q-img src="interview/interview1-tile-share.png" contain />
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap items-center">
            <ol start="3"><li>
              Geben Sie Ihren Bildschirm-Namen an um den Überblick zu verbessern.
            </li></ol>
            <q-img src="interview/interview2-nickname.png" contain />
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap items-center">
            <ol start="4"><li>
              Sie können wahlweise den Kanditaten im Vollbild-Modus sehen...
            </li></ol>
            <q-img src="interview/interview2-fullscreen-applicant.png" contain />
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="column no-wrap items-center">
            <ol start="5"><li>
              oder beide Gesprächspartner in Kacheln.
            </li></ol>
            <q-img src="interview/interview2-tiles-recruiter.png" contain />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  'meta': {
    'title': 'Bewerbungsgespräche mit Jitsi',
    'meta': {
      'description': { name: 'description', content: 'Einfache Bewerbungsgespräche ohne Registrierung der Teilnehmer. Eine Hürde weniger für den Bewerber. Einfache Einhaltung des Datenschutzes. Komferenz im Corporate Identity ihres Unternehmens.' }
    }
  },
  data () {
    return {
      'imgnr': 1
    }
  }
  // name: 'PageName',
}
</script>
