<template>
  <q-page padding>
    <h1>Download</h1>

    <div class="q-pa-md">
      <p>
        Diese Seite zeigt, wie die ganze Webseite cross-solution.de als Programm
        unter Windows, macOS und Linux laufen lassen kann. Die Youtube Videos zeigen,
        wie das Programm aus den <a href="https://github.com/cross-solution/cross-solution.de">Quellen</a>
        "gebaut" wird.
      </p>
      <p>
        Der Download richtet sich an User, die das Ergebnis einfach mal ausprobieren möchten, ohne es lokal
        zu compilieren. Um zu sehen, wie die Installation und die Deinstallation funktioniert.
      </p>
      <div class="row q-col-gutter-md">
        <div class="col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6 q-mb-xs">Building on macOS</div>
            </q-card-section>
            <q-video :ratio="16/9" src="https://www.youtube.com/embed/s74prl6yGhE" />
            <q-card-section>
              <q-card-actions>
                <q-btn type="a" href="https://old.cross-solution.de/downloads/SmartComposer-0.0.1.dmg" flat>Download</q-btn>
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6">
          <q-card class="col-md-6">
            <q-card-section>
              <div class="text-h6 q-mb-xs">Building on Windows</div>
            </q-card-section>
            <q-video :ratio="16/9" src="https://www.youtube.com/embed/M0vcA01WdyY" />
                       <q-card-section>
              <q-card-actions>
                <q-btn type="a" href="https://old.cross-solution.de/downloads/SmartComposer Setup 0.0.1.exe" flat>Download</q-btn>
              </q-card-actions>
            </q-card-section>

          </q-card>
        </div>
      </div>
    </div>
    <!-- content -->
  </q-page>
</template>

<script lang="javascript">
export default {
  // name: 'PageName',
}
</script>
