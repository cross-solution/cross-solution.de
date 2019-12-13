<template>
  <q-page padding>
    <q-stepper v-model="step" vertical header-nav flat color="primary" animated>
      <q-step
        :name="1"
        title="Persönliche Daten"
        icon="settings"
        :done="step > 1"
      >
        <y-address />

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Weiter" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Anschreiben"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >

<div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Anscchreiben</div>
                    <q-editor
            v-model="editor"
            min-height="5rem"
            placeholder="Anschreiben"
          />
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
             <q-uploader
      url="http://localhost:4444/upload"
      label="Anlagen zur Bewerbung"
      multiple
      style="max-width: 300px"
    />
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </div>

        <q-stepper-navigation>

          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Zurück"
            class="q-ml-sm"
          />
          <q-btn @click="step = 4" color="primary" label="Weiter" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Dokumente hochladen" caption="Photo, Lebenslauf und Zeugnisse" icon="assignment">

          <q-uploader
            style="margin-top: 22px; border: 3px dashed red"
            url="http://localhost:4444/upload"
            label="Custom header"
            multiple
            flat
            text-color="grey"
            :max-total-size="maxTotalSize"
          >
            <template v-slot:header="scope">
              <q-card v-if="scope.queuedFiles.length == 0" flat>
                <q-card-section>
                  <q-btn
                    v-if="scope.queuedFiles.length > 1"
                    icon="clear_all"
                    @click="scope.removeQueuedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Clear All</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.uploadedFiles.length > 0"
                    icon="done_all"
                    @click="scope.removeUploadedFiles"
                    dense
                    flat
                  >
                    <q-tooltip>Remove Uploaded Files</q-tooltip>
                  </q-btn>
                  <q-spinner
                    v-if="scope.isUploading"
                    class="q-uploader__spinner"
                  />
                  <div class="col">
                    <div class="q-uploader__title">
                      Bitte laden Sie Ihr Foto hoch.
                    </div>
                    <div class="q-uploader__subtitle">
                      {{ scope.uploadSizeLabel }} /
                      {{ scope.uploadProgressLabel }}
                    </div>
                  </div>
                  <q-btn
                    v-if="scope.canAddFiles"
                    type="a"
                    icon="add_box"
                    round
                    dense
                    flat
                  >
                    <q-uploader-add-trigger />
                    <q-tooltip>Pick ccFiles</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="scope.upload"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Upload Files</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.isUploading"
                    icon="clear"
                    @click="scope.abort"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Abort Upload</q-tooltip>
                  </q-btn>
                </q-card-section>
              </q-card>
            </template>
          </q-uploader>

      </q-step>

      <q-step :name="4" title="Bewerbung absenden" icon="add_comment">
        <div class="q-pa-md" style="max-width: 300px">
      <q-input
        label="frühester Eintrittstermin"
        filled
        v-model="date"
        hint="wann können Sie anfangen?"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="cc" val="primary" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Blindkopie</q-item-label>
            <q-item-label caption>
              Bitte senden Sie mir meine übermittelten Daten per CC.
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="privacy" val="primary" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Datenschuz</q-item-label>
            <q-item-label caption>
              ich habe die Datenschutzbestimmungen gelesen und akzeptiere Sie
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-stepper-navigation>

          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Zurück"
            class="q-ml-sm"
          />
           <q-btn color="primary" icon-right="send" label="Berwerbung absenden" />

        </q-stepper-navigation>
      </q-step>
    </q-stepper>

  </q-page>
</template>

<script lang="javascript">

import YAddress from '../components/Form/Address.vue'

export default {
  meta: {
    'title': 'Bewerben'
  },
  name: 'Apply',
  data () {
    return {
      model: null,
      gender: [
        'Herr', 'Frau', 'Diverse'
      ],
      editor: 'Ihr Anschreiben',
      privacy: false,
      cc: false,
      date: '',
      maxTotalSize: 2048000,
      step: 1,
      tab: 'mails'

    }
  },
  components: {
    YAddress
  }
}
</script>
