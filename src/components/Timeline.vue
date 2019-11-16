<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline
      :layout="layout"
      color="secondary"
    >
      <q-timeline-entry heading>
        Timeline
      </q-timeline-entry>

      <q-timeline-entry
        title="Heute"
        subtitle="2019"
        side="left"
      >
        <div>
          Relaunch Homepage auf Basis von <a
            href="/#about"
            @click="dialog = true"
          >Quasar</a>. Stellenmarkte.com
        </div>
      </q-timeline-entry>

      <q-dialog v-model="dialog">
        <q-card>
          <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div class="col-auto text-grey q-pt-md">
                <q-icon name="place" /> 250 ft
              </div>
            </div>

            <q-rating
              v-model="stars"
              :max="5"
              size="32px"
            />
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-subtitle2 text-grey">Small plates, salads &amp; sandwiches in an intimate setting.</div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn
              flat
              round
              icon="event"
              v-close-popup
            />
            <q-btn
              flat
              v-close-popup
            >5:30PM</q-btn>
            <q-btn
              flat
              v-close-popup
            >7:30PM</q-btn>
            <q-btn
              flat
              v-close-popup
            >9:00PM</q-btn>
            <q-btn
              flat
              color="primary"
              v-close-popup
            >Reserve</q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-timeline-entry
        title="Python und Scrapy"
        subtitle="2018"
        side="right"
        icon="delete"
      >
        <div>
          Konzeption und Aufbau eines Crawlers für Stellenanzeigen. Aufgrund der Zusammenarbeit mit
          Remote Workern können wir viel schneller aktuelle Technologien nutzbar machen.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="2017"
        subtitle="2017"
        side="left"
      >
        <div>

        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="2016"
        subtitle="2016"
        side="left"
      >
        <div>
          Mailstack mit Dovecot, Postfix, Roundcube und VimBAdmin. Gitlab entscheidet sich für <a href="https://about.gitlab.com/blog/2016/10/20/why-we-chose-vue/">vue</a>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="2015"
        subtitle="2015"
        side="left"
      >
        <div>
          Asterisk Salesforce mit PhoneMondo. Freeswitch mit Kamailio, Snom Telefonen und einer redundanten Mitel TK.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Remote Working"
        subtitle="2014"
        side="left"
      >
        <div>
          Wir rekrutieren das erste mal per oDesk (später Upwork) und tauchen ein in die Welt des "Remote Workings". Wir
          erkennen einen Zusammenhang zwischen Open Source und Arbeit.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="YAWIK"
        subtitle="2013"
        side="left"
      >
        <div>
          YAWIK wird gestartet.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>November, 2017</q-timeline-entry>

      <q-timeline-entry
        title="Voip und Telefonie"
        subtitle="2012"
        side="left"
      >
        <div>
          Wir entdecken für uns <a href="https://www.proxmox.com/en/">Proxmox</a>. Von uns erst erstmal unbemerkt taucht
          <a href="https://de.wikipedia.org/wiki/GitLab">Gitlab</a> auf.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="2011"
        side="right"
      >
        <div>
          <ul>
            <li>Migration Cyrus auf Dovecot mit 1500 Postfächern.</li>
            <li>Integration Webapplikationen mit Facebook.</li>
            <li>Unterstützung Migration auf NFS4 und Kerberos für eine Forschungseinrichtungen in Deutschland.</li>
            <li>Freeswitch Support für eine Fluggesellschaft. Hier warten wir gespannt auf Gemeinschaft 4.0</li>
            <li>Yate Installation für 250 Teilnehmern.</li>
          </ul>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Voip"
        subtitle="2010"
        side="left"
      >
        <div>
          <div class="">
            Hylafax, Asterisk, SOGo. Redundante Telefonanlage für Unternehmen aus der
            Solarbranche.
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Voip"
        subtitle="2009"
        side="right"
      >
        <div>
          <div class="">LDAP, Asterisk</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Infrastruktur"
        subtitle="2008"
        side="left"
        color="orange"
      >
        <div>
          <div class="">Infrastruktur. <a href="https://de.wikipedia.org/wiki/GitHub">Github</a> erscheint</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Webentwicklung"
        subtitle="2007"
        side="right"
        color="orange"
        icon="done_all"
      >
        <div>
          <div class="">Jobportal einer großen Zeitung</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Intrastruktur"
        subtitle="2006"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          <div class="">Telefonanlagen, VPN, Infrastruktur</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Voip"
        subtitle="2005"
        side="right"
        color="orange"
        icon="done_all"
      >
        <div>
          Entwicklung des <a href="http://joboter.de">Joboter</a>. Alles noch mit SVN. Fax- und Voip Server Installationen. Alles noch in Hardwarbeit.
          ISDN Karten, Kernel kompilieren. In diversen Veranstaltungen haben wir unsere Lösungen vorgestellt.
          Von uns unbemerkt erscheint <a href="https://de.wikipedia.org/wiki/Git">GIT</a>.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Die Anfänge"
        subtitle="2004"
        side="left"
        color="#3b5998"
      >
        <div>
          am Anfang machten wir alles. Entwicklung von Webseiten, Infrastrukturen. Ja sogar ein Design Konzept CI Briefpapier
          und Visitenkarten. <a href="https://de.wikipedia.org/wiki/Facebook">Facebook</a> erscheint, und wächst viel schneller als wir.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Start"
        subtitle="2003"
        side="right"
      >
        <div>
          2003 startet CROSS Solution. Damals noch in der Großen Seestraße.
          Ein Großteil unserer Erfahrung in der Architektur von Human Ressource Systemen für das
          Online-Recruitment basiert auf sechs Jahren maßgeblicher Entwicklung des Jobpilot Stellenmarktes.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
