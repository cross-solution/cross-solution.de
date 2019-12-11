<template>
  <div class="job">
    <q-editor
      v-model="childMessage"
      v-on:keyup="emitToParent"
      name="msg"
      toolbar-text-color="white"
      toolbar-bg="primary"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          }
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['undo', 'redo'],
        ['print', 'fullscreen'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
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
</template>

<style lang="scss"></style>

<script lang="javascript">

export default {
  name: 'Job',
  props: ['title', 'tasks'],
  data () {
    return {
      searching: 'suchen wir zum nächstmöglichen Zeitpunkt eine/n',
      titleTasks: 'Aufgaben:',
      description: 'mit X Mitarbeitern ist Y führender Anbieter von Y ....',
      qualifications: '',
      titleQualifications: 'Qualifikationen:',
      benefits: '',
      titleBenefits: 'Benefits:',
      titleContact: 'Kontakt',
      contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt',
      childMessage: 'xxx'
    }
  },
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent (event) {
      this.$emit('childToParent', this.childMessage)
    }
  }
}
</script>
