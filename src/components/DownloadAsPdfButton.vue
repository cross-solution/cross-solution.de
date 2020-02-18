<template>
  <div>My component</div>
</template>

<template>
  <button @click="downloadAsPdf">Download as PDF</button>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'DownloadAsPdfButton',
  methods: {
    downloadAsPdf () {
      if (!this.$jsPDF) {
        return
      }
      const doc = this.$jsPDF
      /** WITH CSS */
      var canvasElement = document.createElement('canvas')
      let sourceElement = document.getElementsByTagName('main')[0]
      html2canvas(sourceElement, { canvas: canvasElement }).then(function (canvas) {
        const img = canvas.toDataURL('image/jpeg', 0.8)
        doc.addImage(img, 'JPEG', 20, 20)
        doc.save('sample.pdf')
      })
    },
    download () {
      if (!this.$jsPDF) {
        return
      }
      const doc = this.$jsPDF
      /** WITHOUT CSS */
      const contentHtml = this.$refs.content.innerHTML
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      })
      doc.save('sample.pdf')
    }
  }
}
</script>
