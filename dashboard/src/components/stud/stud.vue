<template>
  <div>
    <div class="row">
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <!-- Link Blocks-->
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
      <!-- Tools Links-->
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;" v-for="item in items" :key="item">
       <a :href= item.href style="text-decoration: none; color: black;" >
         <va-card
          overlay
          titleOnImage
          :image= item.image
          :title= item.title
          :to= item.href
          onMouseOver="this.style.cursor='pointer';"
        > {{ item.message }}
        </va-card>
        </a>
      </div>
    </div>

    <!-- DATA TABLE -->
    <va-collapse customHeader>
      <span slot="header">
        <va-button style="width: 100%;" color="warning" icon-right="ion-ios-arrow-down arrow-down">
          Humanities Reviews
        </va-button>
      </span>
      <div slot="body">
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
              <va-collapse customHeader>
                <span slot="header">
                  <va-button style="width: 100%;" color="warning" icon-right="ion-ios-arrow-down arrow-down">
                    Bulletin Description
                  </va-button>
                </span>
                <div slot="body">
                  <div>
                    {{ props.rowData.bulletin }}
                  </div>
                </div>
              </va-collapse>
              <br>
              <va-collapse customHeader>
                <span slot="header">
                  <va-button style="width: 100%;" color="warning" icon-right="ion-ios-arrow-down arrow-down">
                    Student Review
                  </va-button>
                </span>
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

    </va-collapse>
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
      items: [
        { title: "Autodesk AutoCAD", href: "https://web.autocad.com/", image: "https://logodix.com/logo/635166.png",
          message: "Use Autodesk AutoCAD online right in the browser completely free, just login/register with your BITSID as a student" },
        { title: "MathWorks MATLAB", href: "https://matlab.mathworks.com", image: "https://i5j2k7b8.rocketcdn.me/wp-content/uploads/2017/04/Matlab.png",
          message: "Use MathWorks MATLAB online right in the browser completely free, just login/register with your BITSID as a student" },
        { title: "CSATimes IDE", href: "https://web.autocad.com/", image: "https://miro.medium.com/max/1200/1*AvcSX3HOMujgic1RCA6lLQ.png",
          message: "Got a quick code to test? Use the Mini IDE, to test code in over 30 Languages with input, output and error log terminals" },
        { title: "Wolfram Alpha", href: "https://www.wolframalpha.com", image: "https://i0.wp.com/onetechstop.net/wp-content/uploads/2014/11/Wolfram-Alpha-Logo.png?ssl=1",
          message: "Got a quick equation or math defination to check? Go to Wolfram Alpha and use it online now" }
      ]
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

<style lang="scss">

// * {
//   transition: all 0.5s;
// }

body {
  background-color: #f7ecdb;
  min-height: 150vh;
}

tr {
  // background-color: #ffdcab !important;
}

tr:hover {
  background-color: #ffdcab;
}

</style>
