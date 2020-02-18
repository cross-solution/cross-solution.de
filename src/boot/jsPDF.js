// import something here

import * as JsPDF from 'jspdf'

export default ({ Vue }) => {
  Vue.prototype.$jsPDF = new JsPDF()
}
