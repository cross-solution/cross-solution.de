<template>
  <q-card class="col-6">
    <q-card-section>
      <div class="text-h6">Import</div>
      <div class="text-subtitle2">import your Data from social Networks</div>
    </q-card-section>
    <q-card-actions align="around">
    <q-btn
      color="primary" glossy push
      icon="fab fa-facebook-f"
      size="md" @click="auth('facebook')" >
    </q-btn>
    <q-btn
      color="primary" glossy push
      icon="fab fa-linkedin"
      size="md" @click="auth('linkedin')" >
    </q-btn>
    <q-btn
      color="primary" glossy push
      icon="fab fa-github"
      size="md" @click="auth('github')" >
    </q-btn>
    <q-btn
      color="primary" glossy push
      icon="fab fa-google"
      size="md" @click="auth('google')" >
    </q-btn>
    <q-btn
      color="primary" glossy push
      icon="fab fa-dropbox"
      size="md" @click="auth('dropbox')" >
    </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="javascript">
export default {
  methods: {
    auth (network) {
      this.$hello(network).login({ scope: 'friends' })
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>
