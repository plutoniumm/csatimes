<template>
  <div>
    <div
      v-for="club in clubs"
      :key="club"
      style="text-align: center; margin: 10px 0"
    >
      <va-card style="background: #ddd">
        <span style="font-size: 2rem">{{ club.Club }}</span>
        <hr />
        <div>{{ club.Description }}</div>
        <carousel
          :per-page="1"
          :centerMode="1"
          :autoplay="1"
          :easing="ease"
          :loop="1"
        >
          <slide v-for="(por, slide) in club.Pors" :index="slide" :key="slide">
            <h1 style="font-size: 1.5rem">{{ por.Name }}</h1>
            ({{ por.Post }})
            <p>
              {{ por.ID }}
              <br />
              {{ por.Personal }}
              <br />
              Calling No - {{ por.Calling }}
              <br />
              Whatsapp No - {{ por.Whatsapp }}
            </p>
          </slide>
        </carousel>
      </va-card>
    </div>
  </div>
</template>
<script>
import data from '../../../data/por.json'
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
  text-align: center;
  text-justify: inter-word;
  padding: 5px 0;
}

.main {
  width: 77.5vw;
  margin: 0 auto;
  height: auto;
}
</style>
