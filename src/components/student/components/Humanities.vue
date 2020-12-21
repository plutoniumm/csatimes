<template>
  <va-card
    no-padding
    title="Humanities Reviews"
    style="background: #333; color: #fff"
  >
    <div style="padding: 0 20px">
      <div
        style="width: 33%; border-bottom: 1px solid #666; margin-bottom: 5px"
      >
        <i class="fas fa-search"></i>
        <input
          style="padding: 10px; background: transparent; outline: 0; border: 0"
          v-model="term"
          :placeholder="'Search by Code/Name or IC'"
        />
      </div>
    </div>

    <va-data-table :fields="fields" :data="filteredData" per-page="4">
      <template slot="review" slot-scope="props">
        <va-collapse customHeader>
          <span
            slot="header"
            style="width: 100%; padding-left: 85%; overflow: hidden"
          >
            <button>About <i class="fas fa-angle-down"></i></button>
          </span>
          <div slot="body">
            {{ props.rowData.bulletin }}
          </div>
        </va-collapse>
        <va-collapse customHeader>
          <span
            slot="header"
            style="width: 100%; padding-left: 85%; overflow: hidden"
          >
            <button>Review <i class="fas fa-angle-down"></i></button>
          </span>
          <div slot="body">
            {{ props.rowData.review }}
          </div>
        </va-collapse>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
// import users from '../../../data/humanities.json'
import axios from 'axios'

export default {
  name: 'Humanity',
  data () {
    return {
      term: null,
      users: null,
    }
  },
  computed: {
    fields () {
      return [{
        name: 'course',
        title: 'Course Name',
        width: '25%',
      }, {
        name: 'ic',
        title: 'In-Charge',
        width: '15%',
      }, {
        name: '__slot:review',
        title: 'Student Review',
      }]
    },
    filteredData () {
      return !this.term? this.users: this.users.filter(item => {
        return item.course.toLowerCase().includes(this.term.toLowerCase()) || item.ic.toLowerCase().includes(this.term.toLowerCase())
      })
    },
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_HUMANITIES)
      .then(response => {
        this.users = response.data
      })

  }
}
</script>

<style>
button{
  outline: none;
  background: #aaf;
  color: #fff;
  padding: 5px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}
</style>
