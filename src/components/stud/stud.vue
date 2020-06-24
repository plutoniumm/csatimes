<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="row">
      <!-- <div class="flex xs12 sm6">
        <va-card class="upcoming">What's Coming</va-card>
      </div> -->
      <div class="flex xs12 sm6">
        <va-card class="studpor">Student Portal</va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex sm6" style="display: inline-block;">
        <va-collapse customHeader>
          <span slot="header">
            <va-card class="portalboxes" style="text-align: center;">
              <i
                class="icongrad fas fa-signature"
                style="background: -webkit-linear-gradient(45deg, green, white, green);"
              ></i>
              <p>PR Drives</p>
            </va-card>
          </span>
          <div slot="body">
            <div class="flex xs12" style="overflow-x: auto; display: inline;">
              <form>
                <template v-for="prevent in pr">
                  <va-card class="flex xs12" :key="'item' + prevent.name" data-aos="fade-left">
                    <form @submit.prevent="onsubmit()">
                      <template v-for="(imag, i) in prevent.images">
                        <img :src="prevent.images[i].image" width="300px" :key="imag.image" />
                      </template>
                      <br />
                      <va-input
                        v-model="withDescription"
                        placeholder="Enter the scanned QR code here"
                      />
                      <div v-if="prevent.is_nick == true">
                        <h2>Price: {{prevent.price}} ( +{{prevent.price_nick - prevent.price}} for Nick )</h2>
                        <va-checkbox label="Add nick?" v-model="checkbox" />
                        <va-input
                          v-if="checkbox==true"
                          v-model="nick"
                          placeholder="Enter nick here"
                        />
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
            </div>
          </div>
        </va-collapse>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <a href="http://know-your-exam-schedule.herokuapp.com" target="_blank">
          <va-card class="portalboxes">
            <i
              class="icongrad fas fa-vials"
              style="background: -webkit-linear-gradient(45deg, purple, white, purple);"
            ></i>
            <p>Exam Schedule</p>
          </va-card>
        </a>
      </div>
      <!-- <div class="flex xs12 sm6">
        <va-card class="studpor">Student Portal</va-card>
      </div> -->
      <div
        v-for="link in portlinks"
        :key="link"
        class="flex xs12 sm6 lg4 xl3"
        style="text-align: center;"
      >
        <router-link :to="{ path: link.link}" append exact>
          <va-card class="portalboxes">
            <i :class="link.icon" :style="link.icograd"></i>
            <p>{{link.name}}</p>
          </va-card>
        </router-link>
      </div>
      <div style="display: inline-block;">
        <va-collapse customHeader>
          <span slot="header">
            <div class="flex sm6">
              <va-card class="portalboxes" style="text-align: center;">
                <i
                  class="icongrad fas fa-peace"
                  style="background: -webkit-linear-gradient(45deg, blue, white, blue);"
                ></i>
                <p>Humanities Reviews</p>
              </va-card>
            </div>
          </span>
          <div slot="body">
            <Humanity />
          </div>
        </va-collapse>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <div class="flex xs12 sm6">
        <va-card class="implinks">Important Links</va-card>
      </div>
    </div>
    <div class="row">
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
          >
            <!-- {{ item.message }} -->
          </va-card>
        </a>
      </div>
    </div>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<script>
import axios from 'axios'
import Humanity from './humanities.vue'

export default {
  components: {Humanity},
  data () {
    return {
      items: [
          { title: "BITS Goa ERP", href: "https://erp.bits-pilani.ac.in:4431/psp/hcsprod/?cmd=login&languageCd=ENG&", image: "https://erp.bits-pilani.ac.in/img/bits-tagline.png",
          message: "Go to BITS Goa ERP" },
          { title: "Student Welfare Divison", href: "https://swd.bits-goa.ac.in", image: "https://swd.bits-goa.ac.in/static_files/img/swd.png",
          message: "Go to BITS Goa SWD Website" },
          { title: "BITS Goa Library", href: "https://www.bits-goa.ac.in/Library/Index.aspx", image: "https://qphs.fs.quoracdn.net/main-qimg-a1d3a181327d624de25ca00f4d9c9dae-c",
          message: "Go to BITS Goa Library Website" },
          { title: "CTE Techforums", href: "http://forum.bpgc-cte.org/", image: "https://bpgc-cte.org/logo.png",
          message: "Go to Techforums by CTE" },
          { title: "Campus Website", href: "https://web.autocad.com/", image: "https://physociety.files.wordpress.com/2014/02/bits-goa.jpg?w=640",
          message: "Use Autodesk AutoCAD online right in the browser with your BITSID for free" },
          { title: "CSATimes IDE", href: "https://web.autocad.com/", image: "https://miro.medium.com/max/1200/1*AvcSX3HOMujgic1RCA6lLQ.png",
            message: "Go to the CSATimes Mini IDE, code in 30+ Languages" }
      ],
      portlinks:[
            { "name": "Hall of Fame", "icon": "icongrad fas fa-gem", "icograd":"background: -webkit-linear-gradient(45deg, #eeb425, #ffffff, #eeb425);", "link": "../hall", },
            { "name": "BPGC Startups", "icon": "icongrad fas fa-rocket", "icograd":"background: -webkit-linear-gradient(45deg, #fc5185, #3fc1c9);", "link": "../startup", },
            { "name": "Clubs", "icon": "icongrad fas fa-comments", "icograd":"background: -webkit-linear-gradient(45deg, #d5f5ee, #90ee90);", "link": "../clubs", },
            { "name": "Departments", "icon": "icongrad fas fa-cocktail", "icograd":"background: -webkit-linear-gradient(45deg, #cd3333, blue);", "link": "../departments", },
            { "name": "Sports Teams", "icon": "icongrad fas fa-quidditch", "icograd":"background: -webkit-linear-gradient(45deg, red, yellow, red);", "link": "../sports", },
            { "name": "Events", "icon": "icongrad fas fa-calendar-check", "icograd":"background: -webkit-linear-gradient(45deg, #12fff7, #3f5efb);", "link": "../events", }
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
* {
  text-decoration: none;
}

body {
  background-color: black;
}

.implinks {
  background-image: linear-gradient(to right, blue 0%, red 100%);
  color: white;
  font-size: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75em;
}

.studpor {
  background-image:
    radial-gradient(
      circle at 0% 100%,
      red 0%,
      cyan 40%,
      rebeccapurple 100%
    );
  color: white;
  font-size: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75em;
}

.upcoming {
  background-image:
    radial-gradient(
      circle at 0% 0%,
      rgba(144, 238, 144, 1) 0%,
      rgba(255, 229, 180, 1) 40%,
      rgba(252, 70, 107, 1) 100%
    );
  color: white;
  font-size: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75em;
}

.portalboxes {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
  height: 11.25em;
}

.icongrad {
  font-size: 5em;
  padding: 0.25em;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
