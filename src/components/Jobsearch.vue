<template>
  <div class="row full-width">
    <q-form>
      <q-toggle :label="grid" v-model="grid" />
    </q-form>
    <div class="col-md-12">
      <q-table
        ref="resultTable"
        :grid="grid"
        :title="`${pagination.rowsNumber} Stellenangebote`"
        :data="data"
        color="secondary"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="rowsPerPageOptions"
        :pagination.sync="pagination"
        :filter="tableFilter"
        :loading="loading"
        wrap-cells
        @request="onRequest"
        no-data-label="I didn't find anything for you"
        binary-state-sort
      >
        <template v-slot:top>
          <div class="row text-center full-width">
            <q-input
              ref="filterQuery"
              v-model="filter.q"
              class="col-md-4 col-xs-12"
              debounce="300"
              label="Beruf oder Firma"
              placeholder="Suchwort eingeben"
              outlined
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
            <search-region
              v-model="filter.l"
              ref="filterLocation"
              class="col-md-4 col-xs-6"
              label="Ort oder Plz."
            />
            <q-select
              ref="filterDistance"
              v-model="filter.d"
              class="col-md-2 col-xs-6"
              :options="distance"
              label="Umkreis"
              outlined
              clearable
              default="10 km"
            />
            <q-btn
              @click="setFilter"
              class="col-md-2 col-xs-12"
              color="primary"
              size="lg"
              text-color="white"
              label="Jobs finden"
            />
          </div>
        </template>

        <template v-slot:body-cell-id="props">
          <q-td>
            <div>
              <q-img
                :src="props.row.organizationLogo"
                contain
                style="width:100px; max-height: 70px;"
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
              <br />
              {{ props.row.organization }}
            </div>
          </q-td>
        </template>

        <template v-slot:item="props">
          <div
            class="q-pa-md q-gutter-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          >
            <q-card>
              <q-card-section class="logo">
                <img :src="props.row.organizationLogo" />
              </q-card-section>
              <q-separator />
              <q-list>
                <q-item class="jobinfo">
                  <q-item-section>
                    <q-item-label caption>
                      <a :href="props.row.link">{{ props.row.title }}</a>
                    </q-item-label>
                    <q-item-label caption>
                      {{ props.row.organization }}
                    </q-item-label>
                    <q-item-label caption wrap>
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

<script lang="javascript">
import SearchRegion from '../components/SearchRegion.vue'

export default {
  props: ['filterLocation'],
  data () {
    return {
      filter: {
        q: '',
        l: '',
        d: ''
      },
      tableFilter: {},
      loading: false,
      pagination: {
        sortBy: 'date',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      grid: false,
      distance: ['5 km', '10 km', '20 km', '50 km', '100 km'],
      distanceModel: null,
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
        {
          name: 'location',
          label: 'Einsatzort',
          field: 'location',
          align: 'left',
          sortable: false
        },
        {
          name: 'dateStart',
          label: 'Datum',
          classes: 'no-wrap',
          field: 'dateStart',
          align: 'right',
          sortable: true
        }
      ],
      data: []
    }
  },
  components: {
    SearchRegion
  },
  created () {
    this.grid = !!this.$q.platform.is.mobile
  },
  mounted () {
    this.onRequest({
      pagination: this.pagination
    })
  },
  methods: {
    onRequest (props) {
      let {
        page,
        rowsPerPage,
        rowsNumber,
        sortBy,
        descending
      } = props.pagination

      this.loading = true

      // emulate server
      setTimeout(() => {
        // get all rows if "All" (0) is selected
        let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

        // fetch data from "server"
        let returnedData = this.fetchFromServer(
          page,
          fetchCount,
          sortBy,
          descending,
          this.filter
        )

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData)

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
        this.loading = false
      }, 2000)
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer (page, count, sortBy, descending, filter) {
      let data = []
      let query = {
        json: '1',
        page: page,
        count: count,
        q: filter.q,
        l: filter.l,
        d: filter.d
      }

      var queryStr = Object.keys(query)
        .map(k => `${k}=${encodeURIComponent(query[k])}`)
        .join('&')

      this.$axios
        .get(this.host + '?' + queryStr)
        .then(response => {
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

      return data
    },

    setFilter () {
      this.tableFilter = {
        q: this.filter.q,
        l: this.filter.l,
        d: this.filter.d
      }
    }
  },
  computed: {
    host () {
      return process.env.YAWIK_INSTANCE ? process.env.YAWIK_INSTANCE : 'https://yawik.org/demo/de/jobboard'
    }
  }
}
</script>

<style type="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}

.q-card {
  box-shadow: 0 0 3px #666;
  text-align: center;
  vertical-align: middle;
}
.q-card .jobinfo {
  background-color: #eef4fb;
  text-align: left;
  max-height: 120px;
}
.q-card .logo {
  height: 80px;
}
.q-card img {
  max-height: 80px;
}

.pac-container {
  z-index: 9999; /* fixes google autocomplete in lightbox. Works only without scoped css. */
}
</style>
