const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      {
        path: 'digital-change',
        component: () => import('pages/digital-change.vue')
      },
      { path: 'open-source', component: () => import('pages/open-source.vue') },
      { path: 'contact', component: () => import('pages/contact.vue') },
      { path: 'imprint', component: () => import('pages/imprint.vue') },
      { path: 'privacy', component: () => import('pages/privacy.vue') },
      { path: 'jobs', component: () => import('pages/jobs.vue') },
      { path: 'glossary', component: () => import('pages/glossary.vue') },
      { path: 'jobpost', component: () => import('pages/post-a-job.vue') },
      { path: 'timeline', component: () => import('pages/timeline.vue') },
      { path: 'apply', component: () => import('pages/apply.vue') },
      { path: 'values', component: () => import('pages/values.vue') },
      { path: 'settings', component: () => import('pages/settings.vue') },
      { path: 'login', component: () => import('pages/login.vue') }
    ]
  }, {
    path: '/cv',
    component: () => import('layouts/CV.vue'),
    children: [
      { path: '', component: () => import('pages/cv.vue') },
      { path: 'general-data', component: () => import('pages/cv/general-data.vue') },
      { path: 'work-experience', component: () => import('pages/cv/work-experience.vue') },
      { path: 'education', component: () => import('pages/cv/education.vue') },
      { path: 'desired-work', component: () => import('pages/cv/desired-work.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
