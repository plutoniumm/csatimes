<template>
  <div>
    <div class="row">
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <!-- <img :src="require('../../assets/pics/hof.jpg')" width='170px'> -->
          <router-link :to="{ path: '../hall'}" append exact>
            <va-button color="danger"> Hall of Fame</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../startup'}" append exact>
            <va-button color="warning"> BITS Goa Startups</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <a href='http://know-your-exam-schedule.herokuapp.com' target="_blank"><va-button color="info"> Exam Schedule</va-button></a>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../clubs'}" append exact>
            <va-button color="success"> Clubs</va-button>
          </router-link>
        </va-card>
      </div>
    </div>

    <!-- DATA TABLE -->

    <va-card :title="('Humanities Reviews')" color="#ffdcab" style="color: black;">
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
        <va-select
          v-model="perPage"
          :label="('Show Per Page')"
          :options="perPageOptions"
          noClear
        />
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
    >
  
    <template slot="review" slot-scope="props">
      <va-collapse withBackground>
          <span slot="header"> Bulletin Description </span>
          <div slot="body">
                <div>
                  {{ props.rowData.bulletin }}
                </div>
              </div>
        </va-collapse>
        <br>
        <va-collapse withBackground>
          <span slot="header"> Student Review </span>
          <div slot="body">
                <div>
                  {{ props.rowData.review }}
                </div>
              </div>
        </va-collapse>
    </template>

    </va-data-table>
            
  </va-card>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<script>
import { debounce } from 'lodash'
import users from './humanities.json'

export default {
  data () {
    return {
      term: null,
      perPage: '4',
      perPageOptions: ['4', '6', '10', '20', '50'],
      users: users,
    }
  },
  computed: {
    fields () {
      return [{
        name: 'course',
        title: 'Course Name',
        width: '15%',
      },,{
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
  methods: {
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style scoped>

* {
  transition: all 0.5s;
}

body {
  background-color: #f7ecdb;
}

tr {
  background-color: #ffdcab !important;
}

tr:hover {
  background-color: #fec647;
}

</style>
