<template>
  <form
    class="work-experience"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    @change="emitWorkExperience"
  >
    <h2>Berufserfahrung</h2>
    <div class="row q-col-gutter-md">
      <q-input
        class="col-12"
        outlined
        v-model="workExperience.jobTitle"
        label="Position"
      />

      <q-input
        class="col-6"
        outlined
        v-model="workExperience.start"
        mask="date"
        :rules="['date']"
        label="Beginn"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="date"
                @input="() => $refs.qDateProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        class="col-6"
        outlined
        v-model="workExperience.end"
        mask="date"
        :rules="['date']"
        label="Ende"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="date"
                @input="() => $refs.qDateProxy.hide()"
                default-view="Years"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </form>
</template>

<script lang="javascript">

export default {
  name: 'workExperience',
  props: {
    workExperience: {
      default: () => ({
        jobTitle: '',
        start: null,
        end: null
      })
    }
  },
  data () {
    return {
      locale: undefined,
      date: null,
      location: ''
    }
  },
  components: {
  },
  methods: {
    emitWorkExperience (event) {
      this.$emit('workExperience', this.salary)
    }
  }
}
</script>
