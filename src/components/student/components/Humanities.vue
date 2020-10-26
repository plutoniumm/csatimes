<template>
  <va-card
    no-padding
    title="Humanities Reviews"
    style="background: #fff; color: black"
  >
    <div style="padding: 0 20px">
      <div style="width: 33%; border-bottom: 1px solid #666">
        <i class="fas fa-search"></i>
        <input
          style="padding: 10px; background: transparent; outline: 0; border: 0"
          v-model="term"
          :placeholder="'Search by Course Code, Name or IC'"
        />
      </div>
    </div>

    <va-data-table :fields="fields" :data="filteredData" per-page="4">
      <template slot="review" slot-scope="props">
        <va-collapse customHeader>
          <span slot="header" style="width: 33%; overflow: hidden">
            <va-button color="info" icon-right="fas fa-angle-down"
              >Bulletin Description</va-button
            >
          </span>
          <div slot="body">
            {{ props.rowData.bulletin }}
          </div>
        </va-collapse>
        <br />
        <va-collapse customHeader>
          <span slot="header" style="width: 33%; overflow: hidden">
            <va-button color="warning" icon-right="fas fa-angle-down"
              >Student Review</va-button
            >
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
import users from '../../../data/humanities.json'

export default {
  name: 'Humanity',
  data () {
    return {
      term: null,
      users: users,
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
        width: '12%',
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
}
</script>

<style>
</style>
