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
    message: 'Unsere Webseite verwendet Cookies.',
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
      'Der Umstieg auf Quasar hat sich gelohnt. Um ihnen zu zeigen, wie effizient man heute mit Quasar entwickeln kann, haben wir ein Eingabetool für Google Jobs und ein Jobportal entwickelt. Alles Open Source und kostenlos. Schauen sie es sich an und zeigen sie es ihrer IT.',
    position: 'bottom-left',
    avatar: 'team/cbleek-460x460.jpeg',
    timeout: 10000,
    classes: 'notify_img',
    color: 'secondary',
    textColor: 'black',
    actions: [
      {
        label: 'zum Jobportal',
        color: 'white',
        noDismiss: false,
        handler () {
          openURL('https://jobbord.yawik.org')
        }
      },
      {
        label: 'zur Anzeigeneingabe',
        color: 'white',
        noDismiss: false,
        handler () {
          openURL('https://jobwizard.yawik.org')
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
