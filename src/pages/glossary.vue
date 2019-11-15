<template>
  <q-page
    padding
    class="mariadb"
  >
    <h2>Was ist eigentlich ..., was war nochmal ... ?</h2>
    <div class="q-pa-md row">
      <q-expansion-item
        v-for="item in items"
        v-bind:key="item.name"
        v-bind="item.name"
        expand-separator
        class="col-md-3"
        :icon="item.name"
        :label="item.title"
        :caption="item.subtitle"
      >
        <q-card>
          <q-card-section>
            {{ item.text }}
          </q-card-section>
          <q-card-section>
            weitere infos:
            <a
              v-if="item.homepage"
              :href="item.homepage"
            >Homepage</a>
            <a
              v-if="item.wikipedia"
              :href="item.wikipedia"
            >Wikipedia</a>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Glossary',
  data: function () {
    return {
      items: [
        {
          name: 'fab fa-yarn',
          title: 'yarn',
          subtitle: 'Paketmanagement für node.js',
          text: 'man kann yarn als eine Art Nachfolger von npm bezeichnen. Yarn stammt von Facebook.',
          homepage: 'https://yarnpkg.com',
          year: '',
          by: 'Facebook'
        },
        {
          name: 'fab fa-npm',
          title: 'npm',
          subtitle: 'Paketmanagement für nodes.js',
          text: 'Paketmanager für Node.js',
          homepage: 'https://www.npmjs.com',
          wikipedia: 'https://de.wikipedia.org/wiki/Npm_(Software)',
          year: '2010'
        },
        {
          name: 'fab fa-gitlab',
          title: 'GitLab',
          subtitle: 'kollaborative Versionsverwaltung',
          text: '',
          homepage: 'https://www.gitlab.com',
          wikipedia: 'https://de.wikipedia.org/wiki/GitLab',
          year: '2012',
          by: 'GitLab'
        },
        {
          name: 'fab fa-github',
          title: 'GitHub',
          subtitle: 'kollaborative Versionsverwaltung',
          text: 'GitHub ist der Ort, wo Entwickler austauschen. Auch GitLab synchronisiert seine Repositories zu GitHub',
          homepage: 'https://www.github.com',
          wikipedia: 'https://de.wikipedia.org/wiki/GitHub',
          by: 'Microsoft',
          year: '2008'
        },
        {
          name: 'fab fa-git',
          title: 'GIT',
          subtitle: 'System für eine verteilte Versionierung',
          text: 'Aufgrund von Lizenzänderungen in der bis 2005 genutzen BitKeeper Versionsverwaltung wurde GIT entwickelt.',
          homepage: 'https://git-scm.com/',
          year: '2005',
          by: 'Linus Torwald, Junio C. Hamano, Shawn O. Pearce, u.v.a'
        },
        {
          name: 'fab fa-php',
          title: 'php',
          subtitle: 'serverseitig interpretierte Skriptsprache',
          text: '',
          homepage: 'https://www.php.net',
          wikipedia: 'https://de.wikipedia.org/wiki/PHP',
          year: '1995'

        },
        {
          name: 'fab fa-node-js',
          title: 'node.js',
          subtitle: 'interpretierte Sktiptspache für V8',
          text: '',
          by: 'Node.js Foundation',
          homepage: 'https://www.npmjs.com',
          wikipedia: 'https://de.wikipedia.org/wiki/Node.js'
        },
        {
          name: 'fab fa-docker',
          title: 'Docker',
          subtitle: 'Isolierung von Anwendungen in Containern',
          text: '',
          homepage: 'https://www.docker.com',
          wikipedia: 'https://de.wikipedia.org/wiki/Docker_(Software)'
        },
        {
          name: 'fab fa-symfony',
          title: 'symfony',
          subtitle: 'Paketmanagement',
          text: '',
          homepage: 'http://symfony.com/',
          wikipedia: 'https://de.wikipedia.org/wiki/Bootstrap_(Framework)',
          year: '2005',
          by: 'SensioLabs'
        },
        {
          name: 'fab fa-bootstrap',
          title: 'Bootstrap',
          subtitle: 'CSS Framework',
          text: '',
          homepage: 'https://www.npmjs.com',
          wikipedia: 'https://de.wikipedia.org/wiki/Bootstrap_(Framework)',
          by: 'Twitter',
          year: '2011'
        },
        {
          name: 'fab fa-vuejs',
          title: 'vue',
          subtitle: 'clientseitiges JavaScript Framework',
          text: '',
          link: 'https://vuejs.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/Vue.js',
          year: '2014'
        },
        {
          name: 'fab fa-react',
          title: 'react',
          subtitle: 'clientseitiges JavaScript Framework',
          text: '',
          homepage: 'https://reactjs.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/React',
          by: 'Facebook',
          year: '2013'
        },
        {
          name: 'fab fa-less',
          title: 'less',
          subtitle: 'Paketmanagement',
          text: '',
          by: 'Facebook',
          homepage: 'https://www.npmjs.com',
          wikipedia: 'https://de.wikipedia.org/wiki/Less_(Stylesheet-Sprache)',
          year: 2009
        },
        {
          name: 'fab fa-angular',
          title: 'Angular',
          subtitle: 'TypeScript-basiertes clientseitiges Webapplication Framework',
          text: 'es gab mal AngulatJS jetz gibt es angular. Google kam nicht auf die Idee, dass es zu einer Verwechselungsgefahr kommt',
          by: 'Google',
          homepage: 'https://angular.io/',
          wikipedia: 'http://www.angular.io/',
          year: '2015'
        },
        {
          name: 'fab fa-java',
          title: 'java',
          subtitle: 'objektorientierte Programmiersprache',
          text: 'von SUN entwickelt, von Oracle gekauft.',
          by: 'Oracle',
          homepage: 'https://www.java.com',
          year: '1995'
        },
        {
          name: 'fab fa-grunt',
          title: 'Grunt',
          subtitle: 'Javascript Task Runner',
          text: '',
          homepage: 'https://gruntjs.com/'
        },
        {
          name: 'fas fa-asterisk',
          title: 'asterisk',
          subtitle: 'PBX, Telefonanlage',
          text: '',
          homepage: 'https://www.asterisk.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/Asterisk_(Telefonanlage)',
          year: '1999'

        },
        {
          name: 'fab fa-python',
          title: 'Python',
          subtitle: 'Programmiersprache',
          text: 'eine "alte" Sprache.',
          homepage: 'https://www.python.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/Python_(Programmiersprache)',
          by: 'Python Software Foundation',
          year: '1991'
        },
        {
          name: '',
          title: 'bootstrap',
          subtitle: 'Paketmanagement',
          text: '',
          link: 'https://www.npmjs.com',
          year: '2011'
        },
        {
          name: 'fab fa-sass',
          title: 'sass',
          subtitle: 'Stylesheet Sprache',
          text: 'SASS und SCSS sind beispielhaft, für Entwicklungen im Open Source Bereich. Es geht um Details. Lassen wir ein Semikolon am Ende einer Zeile weg oder nicht. Verzichten wir auf geschweifte klammern oder nicht. Die einen sagen, wir möchten den Bezug zum gelernten CSS. Die anderen verweisen auf eine bessere Lesbarkeit. Wir werden sehen, was sich duchsetzt.',
          homepage: 'http://sass-lang.com/',
          year: '2007',
          wikipedia: 'https://de.wikipedia.org/wiki/Sass_(Stylesheet-Sprache)'
        },
        {
          name: 'fab fa-linux',
          title: 'Linux',
          subtitle: 'Betriebssytem',
          text: '',
          homepage: 'https://www.npmjs.com'
        },
        {
          name: 'fab fa-gitter',
          title: 'gitter',
          subtitle: 'Messenger',
          text: '',
          homepage: 'https://gitter.im/'
        },
        {
          name: 'fab fa-laravel',
          title: 'Laravel',
          subtitle: 'PHP Framework',
          text: '',
          link: 'https://laravel.com/',
          wikipedia: 'https://de.wikipedia.org/wiki/Laravel',
          year: '2011',
          by: 'Taylor Otwell'
        },
        {
          name: 'fab fa-bitcoin',
          title: 'Bitcoin',
          subtitle: 'Kryptowährung',
          text: '',
          wikipedia: 'https://de.wikipedia.org/wiki/Bitcoin',
          year: '2009',
          by: 'Satoshi Nakamoto'
        },
        {
          name: 'fab fa-drupal',
          title: 'Drupal',
          subtitle: 'CMS',
          text: '',
          wikipedia: 'https://de.wikipedia.org/wiki/Drupal',
          year: '2000',
          by: 'Satoshi Nakamoto'
        },
        {
          name: 'fab fa-wordpress',
          title: 'Wordpress',
          subtitle: 'CMS',
          text: 'Ursprünglich als Blog Systm konzipiert, ist es heute häufig als CMS eingesetzt',
          wikipedia: 'https://de.wikipedia.org/wiki/Bitcoin',
          year: '2003',
          by: 'WordPress Foundation'
        },
        {
          name: 'fab fa-typo3',
          title: 'Typo3',
          subtitle: 'CMS',
          text: 'In Deutschland ist Typo3 weit verbreitet',
          wikipedia: 'https://de.wikipedia.org/wiki/TYPO3',
          year: '1998',
          by: 'Kasper Skårhøj, TYPO3 Association'
        },
        {
          name: 'fab fa-magento',
          title: 'Magento',
          subtitle: 'Shop System',
          text: '',
          homepage: 'http://www.magentocommerce.com/',
          wikipedia: 'https://de.wikipedia.org/wiki/Magento',
          year: '2008',
          by: 'Magento Inc., Culver City'
        },
        {
          name: '',
          title: 'NUXT JS',
          subtitle: 'Vue.js Framework',
          text: '',
          homepage: 'https://nuxtjs.org/',
          year: ''
        },
        {
          name: '',
          title: 'vuetify',
          subtitle: 'Material Design Component Framework',
          text: '',
          homepage: 'ttps://vuetifyjs.com',
          year: '2008',
          by: 'Magento Inc., Culver City'
        },
        {
          name: '',
          title: 'quasar',
          subtitle: 'Vue.js Framework',
          text: '',
          homepage: 'https://quasar.dev/',
          year: ''
        },
        {
          name: '',
          title: 'Material Design',
          subtitle: 'Designsprache',
          text: '',
          homepage: 'https://material.io/',
          wikipedia: 'https://de.wikipedia.org/wiki/Material_Design',
          by: 'Google',
          year: '2015'
        },
        {
          name: '',
          title: 'Composer',
          subtitle: 'PHP Paketverwaltung',
          text: '',
          homepage: 'https://material.io/',
          wikipedia: 'https://de.wikipedia.org/wiki/Material_Design',
          by: 'Google',
          year: '2015'
        },
        {
          name: '',
          title: 'Deployer',
          subtitle: 'PHP Deployment',
          text: '',
          homepage: 'https://deployer.org/'
        },
        {
          name: '',
          title: 'mongo',
          subtitle: 'dokumentbasierte Datebank',
          text: '',
          homepage: 'https://www.mongodb.com/'
        },
        {
          name: '',
          title: 'MySQL',
          subtitle: 'relationale Datebank',
          text: '',
          homepage: 'https://www.mongodb.com/',
          by: 'Oracle'
        },
        {
          name: '',
          title: 'mariaDB',
          subtitle: 'relationale Datebank',
          text: 'Wesentliche Linux Distributionen haben von MySQL auf MariaDB gewechselt. Wir folgen der Entwicklung',
          homepage: 'https://www.mariadb.org/'
        },
        {
          name: '',
          title: 'Solr',
          subtitle: 'Search Engine',
          text: '',
          homepage: 'https://www.mongodb.com/',
          wikipedia: 'https://de.wikipedia.org/wiki/MongoDB',
          year: '2009'
        },
        {
          name: '',
          title: 'Elasticsearch',
          subtitle: 'Search Engine',
          text: '',
          homepage: 'https://www.elastic.co/',
          wikipedia: 'https://de.wikipedia.org/wiki/Elasticsearch',
          year: '2010'
        },
        {
          name: '',
          title: 'Sphinx',
          subtitle: 'Dokumentation',
          text: '',
          wikipedia: 'https://de.wikipedia.org/wiki/Sphinx_(Software)',
          year: '2010'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.mariadb
  background: url('data:image/svg;utf8,svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1660" viewBox="0 0 256 170" preserveAspectRatio="xMinYMin meet"><path d="M250.392.004c-3.95.127-2.701 1.265-11.236 3.365-8.619 2.121-19.147 1.47-28.428 5.363-27.706 11.62-33.265 51.333-58.452 65.559-18.827 10.634-37.822 11.482-54.899 16.834-11.223 3.519-23.5 10.736-33.668 19.499-7.892 6.803-8.098 12.786-16.345 21.32-8.82 9.127-35.057.154-46.948 14.124 3.83 3.873 5.51 4.958 13.058 3.953-1.562 2.962-10.775 5.458-8.972 9.816 1.898 4.585 24.17 7.693 44.417-4.53 9.429-5.693 16.94-13.899 31.624-15.857 19.003-2.533 40.895 1.624 62.894 4.797-3.262 9.726-9.811 16.194-15.057 23.94-1.625 1.75 3.263 1.946 8.839.889 10.03-2.48 17.258-4.478 24.828-8.884 9.3-5.414 10.71-19.293 22.12-22.297 6.357 9.772 23.649 12.08 34.378 4.264-9.415-2.665-12.017-22.705-8.839-31.535 3.01-8.36 5.985-21.73 9.017-32.78 3.255-11.866 4.455-26.823 8.394-32.868 5.927-9.094 12.475-12.217 18.16-17.345 5.686-5.129 10.89-10.12 10.719-21.855-.055-3.78-2.01-5.886-5.604-5.772z" fill="#002B64"/><path d="M8.594 159c14.418 2.066 23.186 0 34.764-5.02 9.852-4.273 19.366-13.081 31-16.815 17.085-5.482 35.821.007 54.085 1.102 4.448.267 8.867.27 13.229-.205 6.803-4.182 6.663-19.823 13.285-21.256-.195 21.945-9.192 35.094-18.601 47.826 19.83-3.502 31.697-14.972 39.712-30.291 2.432-4.645 4.508-9.642 6.344-14.88 2.839 2.179 1.23 8.808 2.657 12.4 13.659-7.609 21.48-24.973 26.66-42.535 5.992-20.325 8.445-40.906 12.31-46.92 3.772-5.87 9.642-9.488 15-13.246 6.09-4.273 11.52-8.726 12.458-16.867-6.421-.594-7.906-2.08-8.856-5.316-3.215 1.812-6.171 2.2-9.511 2.3-2.898.088-6.082-.041-9.971.358-32.16 3.303-36.247 38.75-56.86 58.844a48.347 48.347 0 0 1-4.835 4.104c-7.22 5.38-16.076 9.224-24.22 12.337-13.183 5.037-25.716 5.395-38.084 9.743-9.08 3.191-18.306 7.82-25.763 12.924a76.37 76.37 0 0 0-5.238 3.903c-4.376 3.58-7.249 7.553-10.027 11.64-2.866 4.21-5.633 8.543-9.851 12.682-6.834 6.71-32.37 1.957-41.36 8.18-1.002.692-1.798 1.523-2.34 2.521 4.906 2.229 8.182.861 13.825 1.485.74 5.355-11.642 8.537-9.812 11.003zM203.435 120.426c.384 6.143 3.95 18.33 7.098 21.293-6.166 1.5-16.787-.978-19.512-5.327 1.4-6.28 8.686-12.02 12.414-15.966z" fill="#FFF"/><path d="M212.468 22.935c4.552 3.952 14.105.78 12.398-7.084-7.074-.586-11.172 1.815-12.398 7.084zM244.207 13.744c-1.21 2.54-3.529 5.815-3.529 12.28-.01 1.11-.843 1.871-.857.16.063-6.32 1.735-9.051 3.512-12.641.826-1.471 1.323-.864.874.201z" fill="#002B64"/><path d="M242.988 12.788c-1.429 2.423-4.868 6.844-5.437 13.285-.105 1.104-1.003 1.788-.867.081.62-6.288 3.369-10.224 5.455-13.645.947-1.391 1.392-.743.849.279zM241.876 11.52c-1.627 2.294-6.922 7.603-8.029 13.975-.199 1.09-1.151 1.698-.871.008 1.146-6.215 5.71-11.1 8.076-14.331 1.06-1.31 1.448-.625.824.348zM240.884 10.106c-1.933 2.042-8.245 8.812-10.235 14.964-.352 1.051-1.38 1.52-.864-.114 2.007-5.992 7.535-12.447 10.332-15.312 1.235-1.147 1.522-.415.767.462z" fill="#002B64"/><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="mariadb" dc:description="mariadb" dc:publisher="Iconscout" dc:date="2017-06-17" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Icon Mafia</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>')
</style>
