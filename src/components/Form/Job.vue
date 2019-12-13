<template>
<q-splitter v-model="splitterModel" style="height: 400px;">
          <template v-slot:before>
            <div class="q-pa-md">
              <q-card class="col-md-3">
                <q-card-section>
                  <div class="job">
    <q-editor
      v-model="qeditor" @keydown="textvalue"
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
      <q-editor v-model="contact" min-height="5rem" @keydown="contact_value_function"/>
    </div>
  </div>
                </q-card-section>
              </q-card>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">Voransicht</div>
              <!-- <div>{{ description }}</div> -->
              <!-- <div>{{ searching }}</div> -->
              <div ><p v-html="text_value"></p></div>
              <div class>
                <h1>{{ title }}</h1>
                <h3>{{ titleTask }}</h3>
                <div>{{ task }}</div>
                <div v-html="contact_value"></div>
                <!-- <h3>{{ titleQualifications }}</h3>
                <div>{{ qualifications }}</div>

                <h3>{{ titleBenefits }}</h3>
                <div>{{ benefits }}</div> -->
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
      titleTasks: 'Aufgaben:',
      description: 'mit X Mitarbeitern ist Y führender Anbieter von Y ....',
      qualifications: '',
      titleQualifications: 'Qualifikationen:',
      benefits: '',
      titleBenefits: 'Benefits:',
      titleContact: 'Kontakt',
      contact: 'Herr Max Mustermann<br>Musterstraß 10<br>12345 Musterstadt',
      text_value: this.qeditor,
      splitterModel: 50 // start at 50%
    }
  },
  mounted () {
  },
  methods: {
    textvalue () {
      this.$emit('changeMsg', this.qeditor)
      this.text_value = this.qeditor
    },
    contact_value_function () {
      // this.$emit('changeMsg', this.qeditor)
      this.contact_value = this.contact
    }
  }
}
</script>
