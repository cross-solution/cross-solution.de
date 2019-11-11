<template>
  <q-page class="flex">

    <div class="q-pa-md">
      <h1>jobs</h1>
      <q-toggle
        :label="`Grid ${grid}`"
        v-model="grid"
      />
      <q-table
        :grid="grid"
        title="Stellenangebote"
        :data="data"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="rowsPerPageOptions"
        :pagination.sync="pagination"
        :loading="loading"
        :filter="q"
        @request="onRequest"
        binary-state-sort
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="q"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body-cell-id="props">
          <q-td>
            <div>
              <q-img
                :src="props.row.organizationLogo"
                contain
                style="width:100px; max-height: 150px;"
                class="rounded-borders"
              />
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-title="props">
          <q-td>
            <div>
              <a :href="props.row.link">
                {{ props.row.title }}
              </a>
              <br>
              {{ props.row.organization }}
            </div>
          </q-td>
        </template>

        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
            <q-card>
              <q-card-section>
                <q-img
                  :src="props.row.organizationLogo"
                  :ratio="1"
                  contain
                  style="width:100%; max-height: 80px;"
                  class="rounded-borders"
                >
                </q-img>

              </q-card-section>
              <q-separator />
              <q-list dense>
                <q-item
                  dense
                  self-stretch
                >
                  <q-item-section>
                    <q-item-label caption>
                      <a :href="props.row.link">{{ props.row.title }}</a>
                    </q-item-label>
                    <q-item-label caption>
                      {{ props.row.organization }}
                    </q-item-label>
                    <q-item-label caption>
                      {{ props.row.location }}
                    </q-item-label>

                    <q-item-label caption>
                      {{ props.row.dateStart }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      loading: false,
      pagination: {
        sortBy: 'date',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      grid: false,
      rowsPerPageOptions: [5, 10, 20, 50],
      columns: [
        {
          name: 'id',
          field: row => row.id,
          required: true
        },
        {
          name: 'title',
          required: true,
          label: 'Stellenangebot',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'dateStart', label: 'Datum', field: 'dateStart', sortable: true }
      ],
      data: []
    }
  },
  mounted () {
    // get initial data from server (1st page)

    this.fetchFromServer({
      pagination: this.pagination,
      q: undefined
    })
  },
  methods: {
    onRequest (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let q = props.q

      this.loading = true

      console.log('Query:' + q + ' Page: ' + page)

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(q)

        // get all rows if "All" (0) is selected
        let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

        // fetch data from "server"
        let returnedData = this.fetchFromServer(page, fetchCount, q, sortBy, descending)

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData)

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
        this.loading = false
      }, 10)
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer (page, count, q, sortBy, descending) {
      let data = []
      let query = {
        json: '1'
      }

      if (page.count) {
        query.count = page.count
      } if (count) {
        query.count = count
      } else query.count = 10

      if (page.page) {
        query.page = page.page
      } else (query.page = page)

      if (q) query.q = q

      var queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&')

      console.log(page)
      console.log(' Filter: ' + q)

      if (!q) {
        console.log('Start Request')

        this.$axios.get('https://www.stellenmarkt.com/de/jobs?' + queryStr)
          .then((response) => {
            this.data = response.data.jobs
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Loading failed',
              icon: 'report_problem'
            })
          })

        console.log(this.data)
      } else {
        console.log(q)
      }
      return data
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount (q) {
      if (!q) {
        console.log('getRowNumberCount')
        return 20
      }
      console.log(q)
      return 20
    },
    load (pageNum) {
      this.curpage = pageNum
      this.loading = true
      this.error = false
      if (!this.remote) {
        this.error = true
        this.errmsg = 'No yawik url provided. Please use the attribute "url".'
        this.loading = false
        return
      }
      var query = {
        json: '1'
      }
      if (this.count) query.count = this.count
      if (this.curpage) query.page = this.curpage
      if (this.org) query.o = this.org
      if (this.q !== '') query.q = this.q
      /* Found on https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
       * Converts Object to query string
       * e.g. { param: 'value', other: 'test' } => 'param=value&other=test'
       */
      var queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&')
      var that = this
      this.$axios.get(this.remote + '?' + queryStr)
        .then(function (response) {
          that.jobs = response.data.jobs
          that.result = response.data
        })
        .catch(function (err) { that.error = true; that.errmsg = err })
        .then(function () { that.loading = false })

      return that.jobs
    }
  }
}
</script>
