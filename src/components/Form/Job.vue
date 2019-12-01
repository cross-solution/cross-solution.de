<template>
  <div class="job">
    <q-editor v-model="description" min-height="5rem" />
    <q-input borderless v-model="searching" />
    <h1>{{ title }}</h1>
    <div class="col-md-6">
      <q-input borderless v-model="titleTasks" />
      <q-editor v-model="tasks" min-height="5rem" />
    </div>
    <div class="col-md-6">
      <q-input borderless v-model="titleQualifications" />
      <q-editor v-model="qualifications" min-height="5rem" />
    </div>
    <div class="col-md-6">
      <q-input borderless v-model="titleBenefits" />
      <q-editor v-model="benefits" min-height="5rem" />
    </div>
    <div class="col-md-6">
      <q-input borderless v-model="titleContact" />
      <q-editor v-model="contact" min-height="5rem" />
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="javascript">

export default {
  name: 'Job',
  props: ['title'],
  data () {
    return {
      searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
      tasks: '',
      titleTasks: 'Aufgaben:',
      description: 'mit X Mitarbeitern ist Y führender Anbieter von Y ....',
      qualifications: '',
      titleQualifications: 'Qualifikationen:',
      benefits: '',
      titleBenefits: 'Benefits:',
      titleContact: 'Kontakt',
      contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt'
    }
  }
}
</script>
