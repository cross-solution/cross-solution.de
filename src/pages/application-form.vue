<template>
  <q-page padding>
    <h1>{{$t('Indivitual Application Forms')}}</h1>
    <p>
      Sie schalten Stellenanzeigen noch mit einer Email Adresse? Ein individuelles
      Bewerbungsfomular im eigenen Design muss nicht teuer sein. Bei uns bekommen
      Sie es in individuelles Bewerbungsformular zum Festpreis von 499,- zzgl MwSt.
    </p>
    <ul>
       <li>Sie müssen nicht mehr die E-Mail für Bewerbungen veröffentlichen. Das schützt vor ungewünschten E-Mails.</li>
       <li>Sie erhalten Bewerbung in einer einheitlicheren Form.</li>
       <li>Sie können einfach feststellen, über welches Jobportal eine Bewerbung kam?</li>
    </ul>
    <p>
      Beispiel Formular <a href="https://form.yawik.org">Bewerbungsformular Yawik Demo</a>
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'ApplicationForms',
  'meta': {
    'title': 'Individuelle Bewerbungsformulare zum Festpreis.',
    'meta': {
      'description': { name: 'description', content: 'Bewerbungsformulare im eigenen Design und mit individuellen Fagen zum Festpreis.' }
    }
  }
}
</script>
