<template>
  <q-uploader
    style="margin-top: 22px; border: 3px dashed grey;"
    class="text-center"
    url="http://localhost:4444/upload"
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
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
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
</template>
