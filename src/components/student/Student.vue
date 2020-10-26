<template>
  <div class="row" style="padding-bottom: 2em">
    <div data-aos="fade-right" class="flex xs12 sm6">
      <va-card class="studpor">Student Portal</va-card>
    </div>
    <div
      v-for="(link, i) in portlinks"
      :key="link"
      class="flex xs12 sm6 lg4 xl3"
      style="text-align: center"
      data-aos="fade-right"
      :data-aos-delay="(i + 1) * 50"
    >
      <router-link :to="{ path: link.link }" append exact>
        <va-card class="portalboxes">
          <i :class="link.icon" :style="link.icograd"></i>
          <p>{{ link.name }}</p>
        </va-card>
      </router-link>
    </div>
    <va-collapse data-aos="fade-right" :data-aos-delay="350" customHeader>
      <span slot="header">
        <div class="flex sm6">
          <va-card class="portalboxes" style="text-align: center">
            <i
              class="icongrad fas fa-peace"
              style="
                background: -webkit-linear-gradient(45deg, blue, white, blue);
              "
            ></i>
            <p>Humanities Reviews</p>
          </va-card>
        </div>
      </span>
      <div slot="body">
        <Humanity />
      </div>
    </va-collapse>
    <div class="flex xs12 sm6" data-aos="fade-right">
      <va-card class="implinks">Important Links</va-card>
    </div>
    <div
      class="flex xs12 sm6 lg4 xl3"
      style="text-align: center"
      v-for="item in items"
      :key="item"
    >
      <a :href="item.href" style="text-decoration: none; color: black">
        <va-card
          overlay
          titleOnImage
          :image="item.image"
          :title="item.title"
          :to="item.href"
          onmouseover="this.style.cursor='pointer';"
        >
        </va-card>
      </a>
    </div>
    <div class="flex xs12 sm6">
      <va-collapse customHeader>
        <span slot="header">
          <va-card class="portalboxes" style="text-align: center">
            <i
              class="icongrad fas fa-signature"
              style="
                background: -webkit-linear-gradient(45deg, green, white, green);
              "
            ></i>
            <p>PR Drives</p>
          </va-card>
        </span>

        <div slot="body">
          <va-card class="flex xs12" style="overflow-x: auto; display: inline">
            <template v-for="prevent in pr">
              <va-card
                class="flex xs12"
                :key="'item' + prevent.name"
                data-aos="fade-left"
              >
                <form @submit.prevent="onsubmit()">
                  <template v-for="(imag, i) in prevent.images">
                    <img
                      :src="prevent.images[i].image"
                      width="300px"
                      :key="imag.image"
                    />
                  </template>
                  <br />
                  <va-input
                    v-model="withDescription"
                    placeholder="Enter the scanned QR code here"
                  />
                  <div v-if="prevent.is_nick == true">
                    <h2>
                      Price: {{ prevent.price }} ( +{{
                        prevent.price_nick - prevent.price
                      }}
                      for Nick )
                    </h2>
                    <input type="checkbox" name="nick" v-model="checkbox" />
                    <label for="nick"> Add Nick?</label><br />
                    <va-input
                      v-if="checkbox == true"
                      v-model="nick"
                      placeholder="Enter nick here"
                    />
                    <va-input
                      label="Number of Tees"
                      v-model="value"
                      type="number"
                      width="50%"
                    />
                  </div>
                  <div v-else>
                    <h2>Price</h2>
                    {{ prevent.price }}
                  </div>
                  <va-select
                    label="Choose Size"
                    v-model="simpleSelectModel"
                    textBy="description"
                    :options="prevent.available_sizes"
                    width="50%"
                  />
                  <va-button color="danger" type="submit">Go</va-button>
                </form>
              </va-card>
            </template>
          </va-card>
        </div>
      </va-collapse>
    </div>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<script>
import axios from 'axios'
import Humanity from './components/Humanities'

export default {
  components: {Humanity},
  data () {
    return {
      items: [
          { title: "BITS Goa ERP", href: "https://erp.bits-pilani.ac.in:4431/psp/hcsprod/?cmd=login&languageCd=ENG&", image: "https://i.ytimg.com/vi/uIKeqAVfR6U/hqdefault.jpg"},
          { title: "BITS Goa Library", href: "https://www.bits-goa.ac.in/Library/Index.aspx", image: "https://qphs.fs.quoracdn.net/main-qimg-a1d3a181327d624de25ca00f4d9c9dae-c"},
          { title: "Campus Website", href: "https://web.autocad.com/", image: "https://physociety.files.wordpress.com/2014/02/bits-goa.jpg?w=640" },
          { title: "Exam Schedule", href: "http://know-your-exam-schedule.herokuapp.com", image: "https://images.shiksha.com/mediadata/images/1579686863phpN05gmz.jpeg"},
          { title: "Student Welfare Division", href: "https://swd.bits-goa.ac.in", image: "https://swd.bits-goa.ac.in/static_files/img/swd-back.png"}
      ],
      portlinks:[
          { "name": "Hall of Fame", "icon": "icongrad fas fa-gem", "icograd":"background: -webkit-linear-gradient(45deg, #eeb425, #ffffff, #eeb425);", "link": "../hallOfFame", },
          { "name": "BPGC Startups", "icon": "icongrad fas fa-rocket", "icograd":"background: -webkit-linear-gradient(45deg, #4AFF98, #38C3FF);", "link": "../startup", },
          { "name": "Clubs", "icon": "icongrad fas fa-comments", "icograd":"background: -webkit-linear-gradient(45deg, #d5f5ee, #90ee90);", "link": "../clubs", },
          { "name": "Departments", "icon": "icongrad fas fa-cocktail", "icograd":"background: -webkit-linear-gradient(45deg, #cd3333, blue);", "link": "../departments", },
          { "name": "Sports Teams", "icon": "icongrad fas fa-quidditch", "icograd":"background: -webkit-linear-gradient(45deg, red, yellow, red);", "link": "../sports", },
          { "name": "Events", "icon": "icongrad fas fa-calendar-check", "icograd":"background: -webkit-linear-gradient(270deg, #12fff7, #3f5efb);", "link": "../events", }
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
    const utok = atob(document.cookie.split(';').filter(e => e.includes('uToken'))[0].split('=')[1])
    axios
      .get('https://csa.devsoc.club/api/v1/genpr/student/getAllsubEvents', {
        headers: { token: utok },
      })
      .then(response => {
        this.pr = response.data.subEvents
      })
  },
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
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
  background-image: radial-gradient(
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
  background-image: radial-gradient(
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
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
