<template>
  <div class="q-px-lg q-pb-md">
    <h1>Timeline</h1>
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Timeline
      </q-timeline-entry>
      <q-timeline-entry title="Heute" subtitle="2021" side="right">
        <div>
          Eingabeformular für <a href="https://jobwizard.yawik.org">Stellenanzeigen</a>.
          Integration mit Keycloak und api-framework.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Bewerbungsformulare" subtitle="2021" side="left">
        <div>
          Individuelle <a href="https://gitlab.com/yawik/applicationform/">Bewerbungsformulare</a>
          zum Festpreis. Basierend auf Quasar. Gehostet als Github oder Gitlab Pages.
          Integration von Placetel Telefonanlagen in die eigene Infrastruktur.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Video Konferenzen" subtitle="2020" side="right">
        <div>
          in 2020 steht das Thema Videokonferenzen im Fokus. Das gibt es von großen
          Anbietern oftmals gratis. Aber wenn Datenschutz wichtig ist, kommt man
          kaum daran vorbei ein Konferenzsystem selbst zu betreiben. Wir unterstützen sie
          beim Setup und dem Betrieb von Jitsi oder BlueBigButton.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Quasar und Vue" subtitle="2019" side="left">
        <div>
          2019 war unser Einstieg in die nodejs Welt. Wir migrieren
          unseren eigenen Mailstack auf Mailcow. Relaunch Homepage auf Basis von
          <a href="#" @click="dialog = true">Quasar</a>. Stellenmarkte.com.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Python und Scrapy"
        subtitle="2018"
        side="right"
        icon="delete"
      >
        <div>
          Konzeption und Aufbau eines Crawlers für Stellenanzeigen. Aufgrund der
          Zusammenarbeit mit Remote Workern können wir viel schneller aktuelle
          Technologien nutzbar machen.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Vue, Strapi, Quasar" subtitle="2017" side="left">
        <div>
          Gitlab fasst ein Jahr vue
          <a
            href="https://about.gitlab.com/blog/2017/11/09/gitlab-vue-one-year-l"
            >zuammen</a
          >. Und wir machen die ersten Erahrungen mit Vue, Strapi und Quasar.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Mail" subtitle="2016" side="right">
        <div>
          Wieder ein Jahr mit viel Administration. Schwerpunkt ist Mail.
          Migration Dovecot in GSuite. Migration Cyrus zu Dovecot. Mailstack mit
          Dovecot, Postfix, Roundcube und VimBAdmin. Gitlab entscheidet sich für
          <a href="https://about.gitlab.com/blog/2016/10/20/why-we-chose-vue/"
            >vue</a
          >
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Telefonie" subtitle="2015" side="left">
        <div>
          2015 ist wieder geprägt durch Telefonie. Wir beschäftogen uns mit der
          Integration von Asterisk in Salesforce mit PhoneMondo. Freeswitch mit
          Kamailio, Snom Telefonen und einer redundanten Mitel TK begleitet uns
          das ganze Jahr.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Remote Working" subtitle="2014" side="right">
        <div>
          Wir rekrutieren das erste mal per oDesk (später Upwork) und tauchen
          ein in die Welt des "Remote Workings". Wir erkennen einen Zusammenhang
          zwischen Open Source und Arbeit.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="YAWIK" subtitle="2013" side="left">
        <div>
          YAWIK wird gestartet. Wir sind der Meinung, Open Source auch im HR
          Bereich viel verbessern könnte
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Voip und Telefonie" subtitle="2012" side="right">
        <div>
          Wir entdecken für uns
          <a href="https://www.proxmox.com/en/">Proxmox</a>. Von uns erst
          erstmal unbemerkt taucht
          <a href="https://de.wikipedia.org/wiki/GitLab">Gitlab</a> auf.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Systemadministration"
        subtitle="2011"
        side="left"
      >
        <div>
          Migration Cyrus auf Dovecot mit 1500 Postfächern.
          Unterstützung Migration auf NFS4 und Kerberos für eine
          Forschungseinrichtungen in Deutschland.
          Freeswitch Support für eine Fluggesellschaft.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Voip" subtitle="2010" side="right">
        <div>
          <div class="">
            Hylafax, Asterisk, SOGo. Redundante Telefonanlage für Unternehmen
            aus der Solarbranche.
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Voip" subtitle="2009" side="left">
        <div>
          <div class="">LDAP, Asterisk</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Infrastruktur"
        subtitle="2008"
        side="right"
        color="orange"
      >
        <div>
          Infrastruktur.
          <a href="https://de.wikipedia.org/wiki/GitHub">Github</a> erscheint
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Webentwicklung"
        subtitle="2007"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          <div class="">
            Unterstützung bei der Einführung und dem Betrieb des
            Jobportals FAZjob.NET der Frankfurter Allgemeinen Zeitung.</div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Intrastruktur"
        subtitle="2006"
        side="right"
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
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Entwicklung des <a href="http://joboter.de">Joboter</a>. Alles noch
          mit SVN. Fax- und Voip Server Installationen. Alles noch in
          Handarbeit. ISDN Karten, Kernel kompilieren. In diversen
          Veranstaltungen haben wir unsere Lösungen vorgestellt. Von uns
          unbemerkt erscheint
          <a href="https://de.wikipedia.org/wiki/Git">GIT</a>.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Die Anfänge"
        subtitle="2004"
        side="right"
        color="#3b5998"
      >
        <div>
          am Anfang machten wir alles. Entwicklung von Webseiten,
          Infrastrukturen. Ja sogar ein Design Konzept CI Briefpapier und
          Visitenkarten.
          <a href="https://de.wikipedia.org/wiki/Facebook">Facebook</a>
          erscheint, und wächst viel schneller als wir.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Start" subtitle="2003" side="left">
        <div>
          2003 startet CROSS Solution. Ein
          Großteil unserer Erfahrung in der Architektur von Human Ressource
          Systemen für das Online-Recruitment basiert auf sechs Jahren
          maßgeblicher Entwicklung des Jobpilot Stellenmarktes.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script lang="javascript">
export default {
  data () {
    return {
      dialog: false
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
  }
}
</script>
