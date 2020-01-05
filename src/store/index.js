import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import WorkExperiences from './models/WorkExperiences'
import Educations from './models/Educations'

import jobs from './jobs'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(WorkExperiences)
database.register(Educations)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      jobs
    },
    plugins: [
      VuexORM.install(database)
    ],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./jobs'], () => {
      const newJobs = require('./jobs').default
      Store.hotUpdate({ modules: { showcase: newJobs } })
    })
  }

  return Store
}
