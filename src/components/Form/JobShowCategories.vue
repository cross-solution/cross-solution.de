<template>
  <div class="text-center col-12 previewData">
    <ul>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">place</i>{{ job.location }}
      </li>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">work</i>{{ $t(job.jobtype, { joinArrays: ', '})}}
      </li>
      <li>
        <i aria-hidden="true" class="material-icons q-icon">schedule</i>{{ $t(job.workload, { joinArrays: ', ' }) }}
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
export default {
  name: 'JobShowCategories',
  props: ['job'],
  data () {
    return {
    }
  }
}
</script>
