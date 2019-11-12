<template>
  <q-page padding>
    <h1>Kontakt</h1>
    Sie können uns direkt per Email kontaktieren oder nachfolgendes Kontaktformular verwenden. Vertrauliche Informationen können Sie uns verschlüsselt schicken (siehe www.gnupg.org). Unser öffenlicher Schlüssel ist hier verfügbar (Id: 0x8AD12510, Fingerprint: 40FE 2824 60BA BDE2 247E 919A DD27 60F5 8AD1 2510). Wir werden uns kurzfristig mit Ihnen in Verbindung setzen.

    <div class="q-pa-md q-gutter-y-sm">
      <q-toolbar class="text-primary">
        <q-btn
          flat
          round
          dense
          icon="menu"
        />
        <q-toolbar-title>
          Toolbar
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="more_vert"
        />
      </q-toolbar>

      <q-toolbar class="bg-grey-3">
        <q-btn
          flat
          round
          dense
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Toolbar
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
        >
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar>

      <q-toolbar class="bg-purple text-white">
        <q-btn
          flat
          round
          dense
          icon="assignment_ind"
        />
        <q-toolbar-title>
          Toolbar
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="apps"
          class="q-mr-xs"
        />
        <q-btn
          flat
          round
          dense
          icon="more_vert"
        />
      </q-toolbar>

      <q-toolbar class="bg-black text-white">
        <q-btn
          flat
          round
          dense
          icon="assignment_ind"
        >
          <q-badge
            floating
            color="red"
          >2</q-badge>
        </q-btn>
        <q-toolbar-title>
          Toolbar
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="sim_card"
          class="q-mr-xs"
        />
        <q-btn
          flat
          round
          dense
          icon="gamepad"
        />
      </q-toolbar>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
