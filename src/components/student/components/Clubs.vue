<template>
  <div>
        <va-card style="background: linear-gradient(to right, #eee, #ccc);margin: 10px 0" 
        v-for="club in clubs" :key="club">
          <span style="font-size: 2rem">{{ club.Club }} ({{ club.Founded || 'Unknown' }}) </span>
            <hr style="border: 1px solid #aaa" />
          <div style="line-height:1.5em;padding:10px 0;">{{ club.Description }}</div>

          <div style="display: flex; overflow-x: scroll;padding:5px 0;">
          <va-card
            style="min-width: 400px; width: 500px; margin: 0 10px"
            v-for="por in club.Pors"
            :key="por"
          >
            <h1 style="font-size: 1.5rem">{{ por.Name }}</h1>
            {{ por.Name }}
            {{ por.Post }}
            <p style="padding: 7px; text-align: left">
              <div style="padding:2px;">
              <i class="far fa-address-card"></i> {{ por.ID }}
              </div>
              <div style="padding:2px;">
              <i class="fas fa-phone-alt"></i> {{ por.Calling }}
              </div>
              <div style="padding:2px;" v-if="por.Calling != por.Whatsapp">
                <i class="fab fa-whatsapp"></i> {{ por.Whatsapp }}
              </div>
            </p>
          </va-card>
        </div>
        </va-card>
  </div>
</template>

<script>
import axios from 'axios'
// import data from '../../../data/pclubs.json'
export default {
  data () {
    return {
      clubs: null,
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/Aviral09/csatimesoriginal/master/data/pclubs.json?token=AOHNF5HJT66SSJNO62FZRSK75G6HE')
      .then(response => {
        this.clubs = response.data
      })

  }
}
</script>

<style lang="scss">
*::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #111;
}

p {
  text-align: justify;
  text-justify: inter-word;
}

.main {
  width: 77.5vw;
  margin: 0 auto;
  height: auto;
}
</style>
