// inspired by https://github.com/quasarframework/quasar/blob/dev/docs/src/boot/gdpr.js
import { Cookies, Notify, openURL } from 'quasar'

if (Cookies.has('gdpr') !== true) {
  Notify.create({
    message: `Unsere Webseite verwendet Cookies.`,
    multiline: true,
    classes: 'doc-gdpr',
    timeout: 0,
    position: 'bottom-right',
    actions: [
      {
        label: 'Einverstanden',
        color: 'secondary',
        handler () {
          Cookies.set('gdpr', 'true', { expires: 5 * 365 })
        }
      },
      {
        label: 'Weitere Infos',
        color: 'primary',
        noDismiss: true,
        handler () {
          openURL('/privacy')
        }
      }
    ]
  })
}
