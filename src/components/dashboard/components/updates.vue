<template>
  <div class="row">
    <va-card
      class="upds"
      v-for="(nt, i) in start1"
      :key="nt"
      :set="(chex[i] = true)"
    >
      <div style="display: flex; justify-content: space-between">
        <h1 style="font-weight: 700">{{ nt.writer }}</h1>
        <span style="color: #a7a7a7">{{ nt.updated_at.substring(0, 10) }}</span>
      </div>
      <div style="margin: 0.5em 0">{{ nt.name }}</div>
      <span style="color: #dddddd" :id="'less' + i">
        {{ nt.summary.slice(0, 140) }}...
        <button v-on:click="flip(i)">Read More</button>
      </span>
      <span style="display: none" :id="'more' + i">{{ nt.summary }}</span>
    </va-card>
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
    flip (i) {
      document.getElementById('less' + i).style.display = 'none'
      document.getElementById('more' + i).style.display = 'block'
    },
  },
  mounted () {
    const utok = atob(document.cookie.split(';').filter(e => e.includes('uToken'))[0].split('=')[1])
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: utok },
      })
      .then(response => {
        this.start1 = response.data.en.reverse()
      })
  },
}
</script>

<style>
.upds {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
  margin: 10px;
  width: calc(50% - 20px);
}
button {
  border: 0;
  cursor: pointer;
  background-color: transparent;
  color: rgba(0, 122, 255, 1);
  padding: 0.25em;
}
</style>
