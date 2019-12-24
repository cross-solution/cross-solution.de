<template>
  <q-page padding>
    <q-stepper
      v-model="step"
      vertical
      header-nav
      flat
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Persönliche Daten"
        icon="settings"
        :done="step > 1"
      >
        <div class="row q-col-gutter-x-md">
          <div class="col-md-10 col-xs-12">
            <y-address />
          </div>
          <div class="col-md-2 col-xs-12">
            <y-photo-upload
              color="transparent"
              uploader-style="background: url(/statics/PhotoUpload.png) center no-repeat;  padding: 0px; border: 3px dashed gray;"
            />
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="step = 2"
            color="primary"
            label="Weiter"
          />
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
          <div
            class="q-gutter-y-md"
            style="max-width: 600px"
          >
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
                <q-tab
                  name="mails"
                  label="Mails"
                />
                <q-tab
                  name="alarms"
                  label="Alarms"
                />
                <q-tab
                  name="movies"
                  label="Movies"
                />
              </q-tabs>

              <q-separator />

              <q-tab-panels
                v-model="tab"
                animated
              >
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
          <q-btn
            @click="step = 4"
            color="primary"
            label="Weiter"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Dokumente hochladen"
        caption="Photo, Lebenslauf und Zeugnisse"
        icon="assignment"
      >
        <q-uploader
          url="http://localhost:4444/upload"
          label="Individual upload"
          multiple
          style="max-width: 300px"
        />
      </q-step>

      <q-step
        :name="4"
        title="Bewerbung absenden"
        icon="add_comment"
      >
        <div
          class="q-pa-md"
          style="max-width: 300px"
        >
          <q-input
            label="frühester Eintrittstermin"
            filled
            v-model="date"
            hint="wann können Sie anfangen?"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="date"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            avatar
            top
          >
            <q-checkbox
              v-model="cc"
              val="primary"
              color="primary"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Blindkopie</q-item-label>
            <q-item-label caption>Bitte senden Sie mir meine übermittelten Daten per
              CC.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            avatar
            top
          >
            <q-checkbox
              v-model="privacy"
              val="primary"
              color="primary"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Datenschuz</q-item-label>
            <q-item-label caption>ich habe die Datenschutzbestimmungen gelesen und akzeptiere
              Sie</q-item-label>
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
          <q-btn
            color="primary"
            icon-right="send"
            label="Berwerbung absenden"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script lang="javascript">
import YAddress from '../components/Form/Address.vue'
import YPhotoUpload from '../components/Form/PhotoUpload.vue'

export default {
  meta: {
    title: 'Bewerben'
  },
  name: 'Apply',
  data () {
    return {
      model: null,
      gender: ['Herr', 'Frau', 'Diverse'],
      editor: 'Ihr Anschreiben',
      privacy: false,
      cc: false,
      date: '',
      step: 1,
      tab: 'mails'
    }
  },
  components: {
    YAddress,
    YPhotoUpload
  }
}
</script>
