<template>
<q-item>
        <q-item-section avatar>
          <q-icon color="primary" :name="icon" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="model"
            :min="0"
            :max="5"
            label
            label-always
            :label-value="level"
            color="primary"
          />
        </q-item-section>
      </q-item>
</template>

<script language="javascript">

export default {
  name: 'Level',
  props: ['type'],
  data () {
    return {
      model: 3
    }
  },
  computed: {
    level: function () {
      let l = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
      return l[this.model]
    },
    icon: function () {
      var r = ''
      switch (this.type) {
        case 'listen':
          r = 'headset'
          break
        case 'speak':
          r = 'forum'
          break
        case 'write':
          r = 'edit'
          break
      }
      return r
    }
  }
}
</script>
