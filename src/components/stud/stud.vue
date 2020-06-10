<template>
  <div>
    <va-collapse customHeader>
      <span slot="header">
        <va-button
          style="width: 100%;"
          color="info"
          icon-right="ion-ios-arrow-down arrow-down"
        >PR Drives</va-button>
      </span>
      <div slot="body">
        <va-card class="flex xs12" style="overflow-x: auto;">
          <form>
            <template v-for="prevent in pr">
              <va-card class="flex sm6 xs12" :key="'item' + prevent.name" data-aos="fade-left">
                <form @submit.prevent="onsubmit()">
                  <template v-for="(imag, i) in prevent.images">
                    <img :src="prevent.images[i].image" width="300px" :key="imag.image" />
                  </template>
                  <br />
                  <va-input v-model="withDescription" placeholder="Enter the scanned QR code here" />
                  <div v-if="prevent.is_nick == true">
                    <h2>Price: {{prevent.price}} ( +{{prevent.price_nick - prevent.price}} for Nick )</h2>
                    <va-checkbox label="Add nick?" v-model="checkbox" />
                    <va-input v-if="checkbox==true" v-model="nick" placeholder="Enter nick here" />
                    <va-input label="Number of Tees" v-model="value" type="number" width="50%" />
                  </div>
                  <div v-else>
                    <h2>Price</h2>
                    {{prevent.price}}
                  </div>
                  <va-select
                    label="Choose Size"
                    v-model="simpleSelectModel"
                    textBy="description"
                    :options="prevent.available_sizes"
                    width="50%"
                  />
                  <va-button color="danger" type="submit">Go</va-button>
                  <br />
                </form>
              </va-card>
            </template>
          </form>
        </va-card>
      </div>
    </va-collapse>

    <div class="row">
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <!-- Link Blocks-->
          <router-link :to="{ path: '../hall'}" append exact>
            <va-button color="danger">Hall of Fame</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../startup'}" append exact>
            <va-button color="warning">BITS Goa Startups</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <a href="http://know-your-exam-schedule.herokuapp.com" target="_blank">
            <va-button color="info">Exam Schedule</va-button>
          </a>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../clubs'}" append exact>
            <va-button color="success">Clubs</va-button>
          </router-link>
        </va-card>
      </div>
      <!-- Tools Links-->
      <div
        class="flex xs12 sm6 lg4 xl3"
        style="text-align: center;"
        v-for="item in items"
        :key="item"
      >
        <a :href="item.href" style="text-decoration: none; color: black;">
          <va-card
            overlay
            titleOnImage
            :image="item.image"
            :title="item.title"
            :to="item.href"
            onmouseover="this.style.cursor='pointer';"
          >{{ item.message }}</va-card>
        </a>
      </div>
    </div>

    <!-- DATA TABLE -->
    <va-collapse customHeader>
      <span slot="header">
        <va-button
          style="width: 100%;"
          color="info"
          icon-right="ion-ios-arrow-down arrow-down"
        >Humanities Reviews</va-button>
      </span>
      <div slot="body">
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
              <va-select
                v-model="perPage"
                :label="('Show Per Page')"
                :options="perPageOptions"
                noClear
              />
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
      </div>
    </va-collapse>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<script>
import { debounce } from 'lodash'
import axios from 'axios'
import users from './humanities.json'

export default {
  data () {
    return {
      term: null,
      perPage: '4',
      perPageOptions: ['4', '6', '10', '20', '50'],
      users: users,
      items: [
          { title: "BITS Goa ERP", href: "https://erp.bits-pilani.ac.in:4431/psp/hcsprod/?cmd=login&languageCd=ENG&", image: "https://logodix.com/logo/635166.png",
          message: "Go to BITS Goa PeopleSoft Enterprise Resourse Planning System for all Academic Activity" },
          { title: "Student Welfare Divison", href: "https://swd.bits-goa.ac.in", image: "https://swd.bits-goa.ac.in/static_files/img/swd.png",
          message: "Go to Student Welfare Divison BITS Goa Website for Campus, Mess and Related Activities" },
          { title: "BITS Goa Library", href: "https://www.bits-goa.ac.in/Library/Index.aspx", image: "https://qphs.fs.quoracdn.net/main-qimg-a1d3a181327d624de25ca00f4d9c9dae-c",
          message: "Go to BITS Goa Library Website for all Library Services such as FTP, Question Papers, Journals" },
          { title: "CTE Techforums", href: "http://forum.bpgc-cte.org/", image: "https://bpgc-cte.org/logo.png",
          message: "Go to Techforums by Center for Technical Education for discussions" },
          { title: "Campus Website", href: "https://web.autocad.com/", image: "https://physociety.files.wordpress.com/2014/02/bits-goa.jpg?w=640",
          message: "Use Autodesk AutoCAD online right in the browser completely free, just login/register with your BITSID as a student" },
          { title: "AutoDesk AutoCAD", href: "https://web.autocad.com/", image: "https://logodix.com/logo/635166.png",
          message: "Use Autodesk AutoCAD online right in the browser completely free, just login/register with your BITSID as a student" },
          { title: "MathWorks MATLAB", href: "https://matlab.mathworks.com", image: "https://i5j2k7b8.rocketcdn.me/wp-content/uploads/2017/04/Matlab.png",
            message: "Use MathWorks MATLAB online right in the browser completely free, just login/register with your BITSID as a student" },
          { title: "CSATimes IDE", href: "https://web.autocad.com/", image: "https://miro.medium.com/max/1200/1*AvcSX3HOMujgic1RCA6lLQ.png",
            message: "Got a quick code to test? Use the Mini IDE, to test code in over 30 Languages with input, output and error log terminals" }
      ],
      pr: null,
      nick: null,
      withDescription: '',
      image: [],
      simpleOptions: [],
      simpleSelectModel: '',
      checkbox: false,
      value: 1,
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
  mounted () {
    axios
      .get('https://csa.devsoc.club/api/v1/genpr/student/getAllsubEvents', {
        headers: { token: localStorage.getItem('user-token') || this.$AuthStr },
      })
      .then(response => {
        this.pr = response.data.subEvents
      })
  },
}
</script>

<style lang="scss">
body {
  background-color: #8ecffc;
}
</style>
