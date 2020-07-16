<template>
  <q-page padding>
    <h1>{{$t('Imprint')}}</h1>
    <div>
      <p>verantworlich für den Inhalt dieser Seiten ist:</p>
      <p>Carsten Bleek<br>
        Diemelstraße 2-4<br>
        60486 Frankfurt</p>
      <p>Adresse<br>
        Email: info@cross-solution.de<br>
        Tel: 069-71910360<br>
        Fax: 069-71910369<br>
        Ust ID: DE232416269</p>

    </div>

  </q-page>
</template>

<script>
export default {
  meta: {
    'title': 'Impressum',
    'meta': {
      'description': { name: 'description', content: 'CROSS Solution, Diemelstrasse 2-4, 60486, Frankfurt. Inhaber: Carsten Bleek' }
    }
  },
  name: 'Imprint'
}
</script>
