<template>
  <div>
    <div class="flex xs12">
      <va-card color="info" style="text-align: center; font-size: 3rem">
        <h2>SPORTS TEAMS</h2>
      </va-card>
    </div>
    <template v-for="sport in sports">
      <div :key="sport" style="margin:10px 0;">
        <va-card style="background: #ddd">
          <span style="font-size: 2rem">{{ sport.Club }}</span>
          <hr />
          <div style="display: flex; overflow-x: scroll">
           <va-card
            style="min-width: 400px; width: 500px; margin: 0 10px"
            v-for="por in sport.PORs"
            :key="por"
          >
            <h1 style="font-size: 1.5rem">{{ por.Name }}</h1>
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
  </div>
</template>
<script>
// import data from '../../../data/sports.json'
import axios from 'axios'
export default {
  data () {
    return {
      sports: null,
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_SPORTS)
      .then(response => {
        this.sports = response.data
      })

  }
}
</script>

<style lang="scss">
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
