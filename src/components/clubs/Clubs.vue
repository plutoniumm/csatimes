<template>
  <div>
    <template v-for="club in clubs">
      <div :key="club" style="text-align: center;">
        <va-card>
          <div>
            <span style="font-size: 2rem;">{{club.Club}}</span>
            <span>
              <hr />
              Founded: {{club.Founded}}
            </span>
          </div>
          <div>
            <div v-if="club.Logo !== null">
              <!-- <img :src="require('../../assets' + club.Logo)" :alt="club.Name" /> -->
            </div>
            <div>{{club.Description}}</div>
          </div>

          <va-collapse customHeader>
            <span slot="header">
              <va-button color="info" icon-right="ion-ios-arrow-down arrow-down">PORs</va-button>
            </span>
            <div slot="body" style="height: 270px;">
              <carousel
                :per-page="1"
                :centerMode="1"
                :autoplay="1"
                :easing="ease"
                :loop="1"
                :navigationEnabled="1"
                :controls-visible="true"
              >
                <slide v-for="(por,slide) in club.Pors" :index="slide" :key="slide">
                  <figure>
                    <!-- <img :src="require('../../assets'+por.Photo)" height="270px;"> -->
                    <figcaption style="font-size: 1rem;">
                      <span style="font-size: 1.5rem;">{{por.Name}}</span>
                      ({{por.Post}})
                      <br />
                      {{por.ID}}
                      <br />
                      {{por.Personal}}
                      <br />
                      Calling No - {{por.Calling}}
                      <br />
                      Whatsapp No - {{por.Whatsapp}}
                    </figcaption>
                  </figure>
                </slide>
              </carousel>
            </div>
          </va-collapse>
        </va-card>
        <br />
        <br />
      </div>
    </template>
  </div>
</template>
<script>
import data from './pclubs.json'
export default {
  data () {
    return {
      clubs: data,
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
