module.exports = {
 title: 'Smart Composer',
 description: 'Manager für Lebensläufe',
 themeConfig: {
   docsDir: 'docs',
   docsBranch: 'master',
   editLinks: true,
   editLinkText: 'Help us improve this page!',
   repoLabel: 'Contribute!',
   smoothScroll: true,
   lastUpdated: 'Letzte Aktualisierung', // string | boolean
   nav: [
      { text: 'Intro', link: '/about/' },
      { text: 'FAQ', link: '/about/faq.md' },
      { text: 'Komponenten', link: '/components/' },
      { text: 'CROSS Solution', link: 'https://cross-solution.de' },
    ],
    sidebar: [
      {
        title: 'About',   // required
        path: '/about/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/'
        ]
      },
      {
        title: 'Komponenten',
        children: [
          '/components/dienstsitz'
        ]
      }
    ]
  }
}