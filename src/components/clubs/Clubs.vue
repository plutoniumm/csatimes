<template>
  <div>
    <template v-for="club in clubs" >
      <div :key="club" style="text-align: justify-center;">
        <va-card>
          <div>
            <span style="font-size: 2rem;">{{club.Name}}</span>
            <span><hr>Founded: {{club.Founded}}</span>
          </div>
          <!-- <div style="text-align: center;">
            <img :src="require('../../assets' + club.Logo)" :alt="club.Name">
            <br>
            {{club.Description}}
          </div> -->
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333333; text-align: center;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                :caption="club.Name"
                :text="club.Description"
                :img-src="require('../../assets' + club.Logo)"
              ></b-carousel-slide>
              <template v-for="por in club.PORs">
                <b-carousel-slide
                  :key="por"
                  :caption="por.Name + ' | ' + por.Title"
                  :text="por.Phone + ' | ' + por.Email"
                  :img-src="require('../../assets' + por.Photo)"
                ></b-carousel-slide>
              </template>

            </b-carousel>
          </div>
        </va-card>
      </div>
    </template>

    <!-- <template>
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          Text slides with image
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          Slides with custom text
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          Slides with image only
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          Slides with img slot
          Note the classes .d-block and .img-fluid to prevent browser default image alignment
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          Slide with blank fluid image to maintain slide aspect ratio
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>

      </div>
    </template> -->

  </div>

</template>
<script>
import data from './pclubs.json'
export default {
  data () {
    return {
      clubs: data,
      // slide: 0,
      // sliding: null,
    }
  },
  methods: {
    // onSlideStart (slide) {
    //   this.sliding = true
    // },
    // onSlideEnd (slide) {
    //   this.sliding = false
    // },
  },
}
</script>

<style lang="scss">

body {
  background-color: #f7ecdb;
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
