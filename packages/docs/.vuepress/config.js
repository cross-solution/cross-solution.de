const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
  home: true,
  locales: {
    '/': {
      lang: 'de-DE',
      title: 'Dokumentation',
      description: 'Smart Composer zum Verwalten von Lebensläufen'

    },
    '/en/': {
      lang: 'en-US',
      title: 'Documentation',
      description: 'Smart Composer to manage Resumes'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'Deutsch',
        selectText: 'Sprachen',
        ariaLabel: 'Sprache wählen',
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        lastUpdated: 'Letzte Aktualisierung',
        nav: require('./nav/de'),
        sidebar: {
          '/guide/': getGuideSidebar('Anleitungen', 'Komponenten')
        }
      }
    },
    '/en/': {
      label: 'Englisch',
      selectText: 'Languages',
      ariaLabel: 'Select Language',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Letzte Änderung',
      nav: require('./nav/en'),
      sidebar: {
        '/guide/': getGuideSidebar('Guides', 'Components')
      }
    }
  }
}


function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'installation',
        'introduction'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'components/salary'
      ]
    }
  ]
}
