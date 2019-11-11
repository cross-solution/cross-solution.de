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
          Stellenmarkte.com
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Python und Scrapy"
        subtitle="2018"
        side="right"
        icon="delete"
      >
        <div>
          Konzeption und Aufbau eines Workflow für das Crawlen von Stellenanzeigen. Aufgrund der Zusammenarbeit mit
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
          Mailstack mit Dovecot, Postfix, Roundcube und VimBAdmin
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
            <li>OPSI Setup für 250 Arbeitsplätze. Wir können die Lösung der Softwareverteilung nur empfehlen.</li>
            <li>Migration Cyrus auf Dovecot mit 1500 Postfächern.</li>
            <li>Integration Webapplikationen mit Facebook.</li>
            <li>Unterstützung Migration auf NFS4 und Kerberos für eine Forschungseinrichtungen in Deutschland.</li>
            <li>Freeswitch Support für eine Fluggesellschaft. Hier warten wir gespannt auf Gemeinschaft 4.0</li>
            <li>Yate ist auch sehr gut. Installation für 250 Teilnehmern.</li>
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
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
