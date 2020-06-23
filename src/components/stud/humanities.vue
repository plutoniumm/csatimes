<template>
  <va-card :title="('Humanities Reviews')" style="color: black;">
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="('Search by Course Code, Name or IC')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select v-model="perPage" :label="('Show Per Page')" :options="perPageOptions" noClear />
      </div>
    </div>

    <va-data-table :fields="fields" :data="filteredData" :per-page="parseInt(perPage)">
      <template slot="review" slot-scope="props">
        <va-collapse customHeader>
          <span slot="header">
            <va-button
              style="width: 100%;"
              color="info"
              icon-right="ion-ios-arrow-down arrow-down"
            >Bulletin Description</va-button>
          </span>
          <div slot="body">
            <div>{{ props.rowData.bulletin }}</div>
          </div>
        </va-collapse>
        <br />
        <va-collapse customHeader>
          <span slot="header">
            <va-button
              style="width: 100%;"
              color="warning"
              icon-right="ion-ios-arrow-down arrow-down"
            >Student Review</va-button>
          </span>
          <div slot="body">
            <div>{{ props.rowData.review }}</div>
          </div>
        </va-collapse>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import { debounce } from 'lodash'
import users from './humanities.json'

export default {
  name: 'Humanity',
  data () {
    return {
      term: null,
      perPage: '4',
      perPageOptions: ['4', '6', '10', '20', '50'],
      users: users,
    }
  },
  methods: {
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
  computed: {
    fields () {
      return [{
        name: 'course',
        title: 'Course Name',
        width: '15%',
      },{
        name: 'code',
        title: 'Course Code',
        width: '5%',
      }, {
        name: 'ic',
        title: 'In-Charge',
        width: '10%',
      }, {
        name: '__slot:review',
        title: 'Student Review',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }
      return this.users.filter(item => {
        return item.course.toLowerCase().includes(this.term.toLowerCase()) || item.ic.toLowerCase().includes(this.term.toLowerCase()) || item.code.toLowerCase().includes(this.term.toLowerCase())
      })
    },
  },
}
</script>

<style>
</style>
