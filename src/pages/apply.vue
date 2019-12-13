<template>
  <q-page padding>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        :name="1"
        header-nav
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        <y-address />

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.

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
          <q-btn color="primary" label="Finish" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <h1>Bewerben</h1>
    <div>
      So könnte ein Bewerbungsformular ausshen. Es besteht aus verschiedenen
      Komponenten.
    </div>

    <div class="row q-col-gutter-xs">
      <h2 class="col-md-12">Persönliche Daten</h2>

      <div class="col-md-8 col-sm-12" style="border: 1px solid blue">
        <y-address />

        <div class="col-md-12">
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

          <h2>Anschreiben</h2>
          <q-editor
            v-model="editor"
            min-height="5rem"
            placeholder="Anschreiben"
          />
        </div>
      </div>
    </div>
    <h2>Dokumente</h2>
    <q-uploader
      url="http://localhost:4444/upload"
      label="Anlagen zur Bewerbung"
      multiple
      style="max-width: 300px"
    />
    <h2>Sonstige Angaben</h2>
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
    <q-separator />

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
    <q-separator />
    <q-btn color="info" icon-right="cancel" label="Voransicht" />
    <q-btn color="warning" icon-right="cancel" label="Abbrechen" />
    <q-btn color="primary" icon-right="send" label="Berwerbung absenden" />
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
      step: 1
    }
  },
  components: {
    YAddress
  }
}
</script>
