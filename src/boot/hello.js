import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '124497304281524',
    google: '',
    linkedin: '7806tax4rugtc4',
    github: '',
    dropbox: ''
  })
  Vue.prototype.$hello = hello
}
