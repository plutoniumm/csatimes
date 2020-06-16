<template>
  <div>
    <template v-for="club in clubs">
      <div :key="club" style="text-align: center;">
        <va-card>
          <div>
            <span style="font-size: 2rem;">{{club.Name}}</span>
            <span>
              <hr />
              Founded: {{club.Founded}}
            </span>
          </div>
          <div>
            <img :src="require('../../assets' + club.Logo)" :alt="club.Name" />
            <div>{{club.Description}}</div>
          </div>

          <va-collapse customHeader>
            <span slot="header">
              <va-button
                color="info"
                icon-right="ion-ios-arrow-down arrow-down"
              >PORs</va-button>
            </span>
            <div slot="body" style="height: 270px;">
              <carousel-3d :controls-visible="true">
                <slide v-for="(por,slide) in club.PORs" :index="slide" :key="slide">
                  <figure>
                    <img :src="require('../../assets'+por.Photo)" height="270px;">
                    <figcaption style="font-size: 1rem;">
                      <span style="font-size: 1.5rem;">{{por.Name}}</span> ({{por.Title}})
                      <br>
                      {{por.Phone}}
                      <br>{{por.Email}}
                    </figcaption>
                  </figure>
                </slide>
              </carousel-3d>
            </div>
          </va-collapse>

        </va-card>
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
  background-color: #8ecffc;
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

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-3d-container figure {
  margin: 0;
}
</style>
