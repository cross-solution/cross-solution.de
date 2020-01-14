<template>
  <q-page padding><h1>{{$t('Language Skills')}}</h1>
  <div>
    <div class="row q-col-gutter-md">
        <language class="col-md-6" native="1"/>
        <language class="col-md-6" @input="getLanguages"/>
    </div>
    <pre>
      {{languages}}
    </pre>
    <div>
      <level type="listen"/>
      <level type="write"/>
      <level type="speak"/>
    </div>
  </div>
   </q-page>
</template>

<script language="javascript">
import Language from 'components/General/LanguageSearch/Language'
import Level from 'components/General/LanguageSearch/Level'

export default {
  data () {
    return {
      languages: null
    }
  },
  methods: {
    getLanguages (e) {
      console.log(e)
    }
  },
  components: {
    Language,
    Level
  }
}
</script>
