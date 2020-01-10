import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: process.env.APP_ID_FACEBOOK,
    google: process.env.APP_ID_GOOGLE,
    linkedin: process.env.APP_ID_LINKEDIN,
    github: process.env.APP_ID_GITHUB,
    dropbox: process.env.APP_ID_DROPBOX
  }, { redirect_uri: '/welcome' })
  Vue.prototype.$hello = hello
}
