<template>
  <div
    class="row"
    style="width:100%"
  >
    <div class="col-12">
      <q-toggle
        :label="`Grid ${grid}`"
        v-model="grid"
      />
      <q-table
        :grid="grid"
        :title="`${pagination.rowsNumber} Stellenangebote`"
        :data="data"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="rowsPerPageOptions"
        :pagination.sync="pagination"
        :loading="loading"
        :filter="q"
        @request="onRequest"
        no-data-label="I didn't find anything for you"
        binary-state-sort
      >

        <template v-slot:top-right>
          <q-input
            dense
            debounce="300"
            v-model="q"
            placeholder="Jobs finden"
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
                style="width:100px; max-height: 70px;"
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
              <q-card-section style="height: 80px; vertical-align: middle; text-align: center">
                <img
                  :src="props.row.organizationLogo"
                  style="max-height: 80px;"
                  class="rounded-borders"
                />

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
                    <q-item-label
                      caption
                      wrap
                    >
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
  </div>
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
        { name: 'location', label: 'Einsatzort', field: 'location', align: 'left', sortable: false },
        { name: 'dateStart', label: 'Datum', field: 'dateStart', sortable: true }
      ],
      data: []
    }
  },
  mounted () {
    this.fetchFromServer({
      pagination: this.pagination,
      q: this.q,
      rowsNumber: 0
    })
  },
  methods: {
    onRequest (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let q = props.q

      this.loading = true

      // emulate server
      setTimeout(() => {
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

      if (!q) {
        this.$axios.get('https://www.stellenmarkt.com/de/jobs?' + queryStr)
          .then((response) => {
            this.data = response.data.jobs
            this.pagination.rowsNumber = response.data.total
            this.pagination.page = response.data.currentPage
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Loading failed',
              icon: 'report_problem'
            })
          })
      }
      return data
    }
  }
}
</script>