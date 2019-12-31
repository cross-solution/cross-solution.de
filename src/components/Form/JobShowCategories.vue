<template>
  <div class="text-center col-12 previewData">
    <ul>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">place</i>{{ job.location }}
      </li>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">work</i>{{ job.jobtype }}
      </li>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">schedule</i>{{ job.workload }}
      </li>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">calendar_today</i>Unveröffentlicht
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.previewData
  text-align: left
  font-size: 16px

.previewData ul
  padding: 20px 0
  margin: 0
  list-style: none

.previewData ul li
  display: inline
  padding-left: 0px
  padding-right: 15px

.previewData .material-icons
  font-size: 20px
  opacity: 0.7
  padding-right: 5px

</style>

<script lang="javascript">
/*
var workload = {
  'fulltime': 'Fulltime',
  'parttime': 'Farttime',
  'minijob': 'Minijob'
}
*/
export default {
  name: 'JobShowCategories',
  props: ['job'],
  data () {
    return {
    }
  },
  methods: {
    /*    __display (field, values) {
      var r = this.workload

      for (var i = 0, len = values; i < len; i++) {
        if (field === 'workload') {
          r = workload[values[i]]
        }
      }
      return r
    }
    */
  }
}
</script>
