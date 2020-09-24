<template>
  <div class="row">
    <div
      class="flex xs12 sm6 md6"
      v-for="(notice, index) in start1"
      :key="notice"
    >
      <va-card
        class="mb-0 upds"
        :key="'item' + notice.name"
        :set="(chex[index] = true)"
      >
        <div class="mailtop">
          <span>
            <h1>{{ notice.writer }}</h1>
          </span>
          <span style="color: #a7a7a7">{{
            notice.updated_at.substring(0, 10)
          }}</span>
        </div>
        <div style="margin: 0.5em 0">{{ notice.name }}</div>
        <span style="color: #dddddd" :id="'less' + index">
          {{ notice.summary.slice(0, 140) }}...
          <button v-on:click="flip(index)">Read More</button>
        </span>
        <span style="display: none" :id="'more' + index">{{
          notice.summary
        }}</span>
      </va-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CampusUpdates',
  components: {
  },
  data () {
    return {
      start1: null,
      chex: [],
    }
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
    flip (index) {
      document.getElementById('less' + index).style.display = 'none'
      document.getElementById('more' + index).style.display = 'block'
    },
  },
  mounted () {
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: btoa(localStorage.getItem('user-token')) },
      })
      .then(response => {
        this.start1 = response.data.en.reverse()
      })
  },
}
</script>

<style>
.mailtop {
  display: flex;
  justify-content: space-between;
}

.upds {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
  margin-top: 1em;
}

button {
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 122, 255, 1);
  padding: 0.25em;
  transition: all 0.3s ease;
}

button:hover {
  cursor: pointer;
  color: rgba(10, 132, 255, 1);
  transition: all 0.3s ease;
}
</style>
