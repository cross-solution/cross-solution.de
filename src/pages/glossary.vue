<template>
  <q-page padding>
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
          text: '',
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
          text: '',
          by: 'Google',
          homepage: 'https://angular.io/',
          wikipedia: 'http://www.angular.io/',
          year: '2015'
        },
        {
          name: 'fab fa-java',
          title: 'java',
          subtitle: 'objektorientierte Programmiersprache',
          text: '',
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
          subtitle: 'Paketmanagement',
          text: '',
          homepage: 'https://www.asterisk.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/Asterisk_(Telefonanlage)',
          year: '1999'

        },
        {
          name: 'fab fa-python',
          title: 'Python',
          subtitle: 'Paketmanagement',
          text: '',
          homepage: 'https://www.python.org/',
          wikipedia: 'https://de.wikipedia.org/wiki/Python_(Programmiersprache)',
          by: 'Python Software Foundation',
          year: '1991'
        },
        {
          name: 'fab fa-bootstrap',
          title: 'bootstrap',
          subtitle: 'Paketmanagement',
          text: '',
          link: 'https://www.npmjs.com',
          year: '2011'
        },
        {
          name: 'fab fa-sass',
          title: 'sass',
          subtitle: 'Paketmanagement',
          text: '',
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
          text: '',
          wikipedia: 'https://de.wikipedia.org/wiki/Bitcoin',
          year: '2003',
          by: 'WordPress Foundation'
        },
        {
          name: 'fab fa-typo3',
          title: 'Typo3',
          subtitle: 'CMS',
          text: '',
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
        }
      ]
    }
  }
}
</script>
