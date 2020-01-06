import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '124497304281524',
    google: '363285585170-gtb525id1tir90ab2ursh5hqe8bvm9l3.apps.googleusercontent.com',
    linkedin: '7806tax4rugtc4',
    github: 'f8f1609e2fa8d63fe6ff',
    dropbox: 'vzem154zcd5f7um'
  }, { redirect_uri: '/cv' })
  Vue.prototype.$hello = hello
}
