<template>
  <div class="row">
    <div
      v-for="(set, i) in people"
      :key="set"
      class="flex xs12 sm6"
      data-aos="fade-right"
      :data-aos-delay="(i + 1) * 50"
    >
      <carousel
        :per-page="1"
        :centerMode="true"
        :autoplay="true"
        :speed="1000"
        paginationPosition="bottom-overlay"
        paginationActiveColor="#666"
        :loop="true"
        style
      >
        <slide v-for="(person, slide) in set" :index="slide" :key="slide">
          <va-card class="issues" :title="person.organisation">
            <div style="display: flex">
              <img :src="person.picture" />
              <div style="text-align: left; padding: 2em; flex: 2">
                <h1>{{ person.name }}:{{ person.post }}</h1>
                <br />
                Phone:{{ person.phone }}
                <br />
                Email:{{ person.address }}@goa.bits-pilani.ac.in
              </div>
            </div>
          </va-card>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
// import data from '../../data/data.json'
// import data1 from '../../data/data1.json'
// import data2 from '../../data/data2.json'
import axios from 'axios'

export default {
  name: 'cards',
  data () {
    return {
      data:null,
      data1:null,
      data2:null,
      people: [data, data1, data2],
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_DATA)
      .then(response => {
        this.data = response.data
      })
      .get(process.env.VUE_APP_DATA1)
      .then(response => {
        this.data1 = response.data
      })
      .get(process.env.VUE_APP_DATA2)
      .then(response => {
        this.data2 = response.data
      })

  }
}
</script>
<style lang='scss' scoped>
img {
  border-radius: 50%;
  object-fit: cover;
  width: 175px;
  height: 175px;
}

.issues {
  color: white;
  background: #222;
}
</style>
