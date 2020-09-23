<template>
  <div>
    <div class="flex xs12">
      <va-card color="info" style="text-align: center; font-size: 3rem;">
        <h2>SPORTS TEAMS</h2>
      </va-card>
      <br />
      <br />
      <br />
    </div>
    <template v-for="sport in sports">
      <div :key="sport" style="text-align: center;">
        <va-card>
          <div>
            <span style="font-size: 2rem;">{{sport.Club}}</span>
            <span>
              <hr />
              <br />
            </span>
          </div>

          <div
            v-for="(por,slide) in sport.PORs"
            :index="slide"
            :key="slide"
            style="font-size: 1rem; display: inline-block; margin: 1.5rem;"
          >
            <!-- <img :src="require('../../assets'+por.Photo)" height="270px;"> -->
            <div>
              <span style="font-size: 1.5rem;">{{por.Name}}</span>
              ({{por.Post}})
              <br />
              {{por.ID}}
              <br />
              Calling No. {{por.Calling}} | Whatsapp No. {{por.Whatsapp}}
              <br />
              {{por.Personal}}
            </div>
          </div>
        </va-card>
        <br />
        <br />
      </div>
    </template>
  </div>
</template>
<script>
import data from '../../data/sports.json'
export default {
  data () {
    return {
      sports: data,
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: black;
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
