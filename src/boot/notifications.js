// inspired by https://github.com/quasarframework/quasar/blob/dev/docs/src/boot/gdpr.js
import { LocalStorage, Notify, openURL } from 'quasar'

const GDPR = 'gdpr'
const WIP = 'wip'

var date = new Date()
var today = date.getTime()

if (LocalStorage.has(GDPR) !== true || LocalStorage.getItem(GDPR).expires < today) {
  gdpr()
}
if (LocalStorage.has(WIP) !== true || LocalStorage.getItem(WIP).expires < today) {
  wip()
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

function wip () {
  var expire = today + 1000 * 60 * 60 * 24 // milliseconds = 1 day

  Notify.create({
    message:
      'Wir überarbeiten nach 15 Jahren unsere Homepage. Obwohl noch nicht ganz fertig, ist sie bereits online. Wir ermöglichen Ihnen dadurch auf Github zu verfolgen, wie die Seite entsteht.',
    position: 'bottom-left',
    avatar: 'statics/team/cbleek-460x460.jpeg',
    timeout: 10000,
    classes: 'notify_img',
    color: 'secondary',
    textColor: 'black',
    actions: [
      {
        label: 'zur alten Version',
        color: 'white',
        noDismiss: false,
        handler () {
          openURL('https://old.cross-solution.de')
        }
      },
      {
        label: 'zum GitHub Repo',
        color: 'white',
        noDismiss: false,
        handler () {
          openURL('https://github.com/cross-solution/cross-solution.de')
        }
      },
      {
        icon: 'close',
        color: 'white',
        label: '',
        handler () {
          LocalStorage.set(WIP, { expires: expire, today: today })
        }
      }
    ]
  })
}
