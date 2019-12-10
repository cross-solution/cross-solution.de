<template>
  <q-page class="flex">
    <q-carousel
      class="full-width"
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide
        name="first"
        img-src="statics/license.jpg"
      >
        <a
          style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px"
          href="https://unsplash.com/@diesektion?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Robert Anasch"
        ><span style="display:inline-block;padding:2px 3px"><svg
              xmlns="http://www.w3.org/2000/svg"
              style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg></span><span style="display:inline-block;padding:2px 3px">Robert Anasch</span></a>
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Lizenz</div>
          <div class="text-subtitle1">Es ging mal um Lizenzen...</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="statics/computer-code.jpg"
      >
        <a
          style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px"
          href="https://unsplash.com/@markusspiske?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Markus Spiske"
        ><span style="display:inline-block;padding:2px 3px"><svg
              xmlns="http://www.w3.org/2000/svg"
              style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg></span><span style="display:inline-block;padding:2px 3px">Markus Spiske</span></a>

        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Code</div>
          <div class="text-subtitle1">es ging mal um Code</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="third"
        img-src="statics/horizon.jpg"
      >
        <a
          style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px"
          href="https://unsplash.com/@qa9de?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Mark Asthoff"
        ><span style="display:inline-block;padding:2px 3px"><svg
              xmlns="http://www.w3.org/2000/svg"
              style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg></span><span style="display:inline-block;padding:2px 3px">Mark Asthoff</span></a>

        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Arbeit</div>
          <div class="text-subtitle1">es geht zunehmend um Arbeit</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row q-pa-sm">
      <div class="text-body1">
        Seit 20 Jahren arbeiten wir mit Spaß und Open Source. In der Software-Entwicklung hat sich dort viel getan.
        Wir haben festgestellt, dass es einfacher ist mit der Entwicklung schritt zu halten, wenn man mit Freelancern
        verteilt um den Globus zusammenarbeitet.

      </div>
      <div class="text-body2">
        Bereits 2001 sah <a href="https://de.wikipedia.org/wiki/Gundolf_S._Freyermuth">Gundolf S. Freyermuth</a> einen
        Zusammenhang zwischen Open Source und Arbeit. Er schieb in
        der <a href="https://www.heise.de/ct/artikel/Offene-Geheimnisse-285236.html">CT</a>:
        <cite>
          "Der Erfolg der Open-Source-Bewegung beruht daher keinesfalls nur darauf, dass die in ihrem Kontext
          hergestellte Software am Ende gratis oder zumindest vergleichsweise billig abgegeben wird. Von weitreichenderer
          Bedeutung als dieser eher beiläufige Umstand sind strukturelle Innovationen. Sie betreffen zwei grundsätzliche
          Bereiche der industriellen Ordnung: die Arbeitsorganisation und die Regelung geistigen Eigentums."
        </cite>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .6)
</style>

<script>
export default {
  meta: {
    'title': 'Open Source'
  },
  name: 'OpenSource',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>
