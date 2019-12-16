<template>
  <q-splitter
    v-model="splitterModel"
    style="height: 400px;"
  >
    <template v-slot:before>
      <div class="q-pa-md">
        <q-card class="col-md-3">
          <q-card-section>
            <div class="job">
              <y-photo-upload />
              <q-editor
                v-model="t.description"
                :dense="$q.screen.lt.md"
                :toolbar="[
                  ['left', 'center', 'right', 'justify'],
                  ['bold', 'italic'],
                  ['quote', 'unordered', 'ordered'],
                  ['undo', 'redo']]"
              />

              <q-input
                borderless
                v-model="searching"
              />
              <h1>{{ t.title }}</h1>

              <div class="col-md-6">
                <q-input
                  borderless
                  v-model="t.titleContact"
                />
                <q-editor
                  v-model="t.contact"
                  min-height="5rem"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </template>

    <template v-slot:after>
      <div class="q-pa-md">
        <div>
          <p v-html="t.description"></p>
        </div>
        <div>{{ t.searching }}</div>
        <div class>
          <h1>{{ t.title }}</h1>
          <div>{{ t.titleContact }}</div>
          <div v-html="t.contact"></div>
        </div>
      </div>
    </template>
  </q-splitter>
</template>

<style lang="scss"></style>

<script lang="javascript">
import YPhotoUpload from './PhotoUpload.vue'

export default {
  name: 'Job',
  props: ['tasks'],
  data () {
    return {
      t: {
        title: 'Jobtitle',
        searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
        titleContact: 'Kontakt',
        contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt',
        description: ''
      },
      splitterModel: 50 // start at 50%
    }
  },
  components: {
    YPhotoUpload
  }
}
</script>
