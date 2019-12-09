// inspired by https://github.com/quasarframework/quasar/blob/dev/docs/src/boot/gdpr.js
import { LocalStorage, Notify, openURL } from 'quasar'

const GDPR = 'gdpr'

var date = new Date()
var today = date.getTime()

if (LocalStorage.has(GDPR) !== true || LocalStorage.getItem(GDPR).expires < today) {
  gdpr()
}

function gdpr () {
  var expire = today + 1000 * 60 * 60 * 24 * 365 // milliseconds = 1 year

  Notify.create({
    message: `Unsere Webseite verwendet Cookies.`,
    classes: 'doc-gdpr',
    timeout: 0,
    position: 'bottom-right',
    actions: [
      {
        label: 'Einverstanden',
        color: 'secondary',
        handler () {
          LocalStorage.set(GDPR, { expires: expire, today: today })
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
