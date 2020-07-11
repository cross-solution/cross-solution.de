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
          Jitsi eignet sich für Videocalls, insbesondere für Bewerbungsgespräche,
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
      <div class="col-md-6 col-sm-12">
        <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="jitsi-screenshot.png" />
        <q-carousel-slide :name="2" img-src="jitsi-desktop-sharing.png" />
        <q-carousel-slide :name="3" img-src="jitsi-bex.png" />
        <q-carousel-slide :name="4" img-src="jitsi-chat.png" />
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
    <div style="margin-top: 50px;" class="row q-gutter-lg justify-center">

      <q-card class="my-card">

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Small
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          <ul>
            <li>Datenschutzkonformes Setup</li>
            <li>Anpassung an eigenes CI</li>
            <li>Funktionsumfang wie im Demo</li>
          </ul>
        </div>

      </q-card-section>
      <q-card-actions class="absolute-bottom">
        <div class="text-grey text-center">
          <h4>499€</h4>
        </div>
      </q-card-actions>
    </q-card>

      <q-card class="my-card">

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Medium
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          <ul>
            <li>Datenschutzkonformes Setup</li>
            <li>Anpassung an eigenes CI</li>
            <li>Funktionsumfang wie im Demo</li>
            <li>Recording</li>
          </ul>
        </div>

      </q-card-section>

      <q-card-actions>
        <div class="text-grey text-center">
          <h4>999€</h4>
        </div>
      </q-card-actions>
    </q-card>
      <q-card class="my-card">

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Big
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          <ul>
            <li>Datenschutzkonformes Setup</li>
            <li>Anpassung an eigenes CI</li>
            <li>Funktionsumfang wie im Demo</li>
            <li>Recording</li>
            <li>Telefonie eingehend und ausgehend</li>
          </ul>
        </div>

      </q-card-section>

      <q-card-actions>
        <div class="text-grey text-center">
          <h4>ab 1999€</h4>
        </div>
      </q-card-actions>
    </q-card>

    </div>
<div class="row">
  <div class="col12">
    alle Preise zzgl. gesetzlicher MwSt.</div>
</div>
  </q-page>
</template>

<script>
export default {
  name: 'Hosting',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
