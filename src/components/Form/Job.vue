<template>
<q-splitter v-model="splitterModel" style="height: 400px;">
          <template v-slot:before>
            <div class="q-pa-md">
              <q-card class="col-md-3">
                <q-card-section>
                  <div class="job">
    <q-editor
      v-model="description"
      :dense="$q.screen.lt.md"
      :toolbar="[
        ['left', 'center', 'right', 'justify'],
        ['bold', 'italic'],
        ['quote', 'unordered', 'ordered'],
        ['undo', 'redo'],
      ]"

    />

    <q-input borderless v-model="searching" />
    <h1>{{ title }}</h1>
    <!--<div class="col-md-6">
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
    -->
    <div class="col-md-6">
      <q-input borderless v-model="titleContact" />
      <q-editor v-model="contact" min-height="5rem" />
    </div>
  </div>
                </q-card-section>
              </q-card>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div ><p v-html="description"></p></div>
              <div>{{ searching }}</div>
              <div class>
                <h1>{{ title }}</h1>
                <h3>{{ titleTask }}</h3>
                <div>{{ task }}</div>
                 <div>{{ titleContact }}</div>
                <div v-html="contact"></div>
              </div>
            </div>
          </template>
        </q-splitter>

</template>

<style lang="scss"></style>

<script lang="javascript">

export default {
  name: 'Job',
  props: ['tasks'],
  data () {
    return {
      title: 'Jobtitle',
      searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
      titleContact: 'Kontakt',
      contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt',
      description: this.description,
      splitterModel: 50 // start at 50%
    }
  }
}
</script>
