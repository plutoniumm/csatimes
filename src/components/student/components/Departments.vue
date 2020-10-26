<template>
  <div>
      <va-card style="background: linear-gradient(to right, #eee, #ccc);margin: 10px 0"
      v-for="(club,i) in clubs" :key="club"
      :data-aos="i<3?'fade-right':''"
      >
        <span style="font-size: 2rem">{{ club.Club }}</span>
        <hr style="border: 1px solid #aaa" />
        <div>{{ club.Description }}</div>
        <div style="display: flex; overflow-x: scroll">
          <va-card no-padding
            :style="{minWidth: '400px', width: '500px', margin: '0 10px', background: `url(${club.icon || 'https://i.imgur.com/hqCBTK8.png'}) no-repeat center center`, overflow:'hidden', backgroundSize:'cover'}"
            v-for="(por,j) in club.Pors"
            :key="por"
            :data-aos="i<3?'fade-right':''"
            :data-aos-delay="j*50"
          >
          <div class="blur" style="background: #2226; padding:15px;color:#fff;border-radius:8px;">
            <h1 style="font-size: 1.5rem">{{ por.Name }}</h1>
            {{ por.Post }}
            <p style="padding: 7px; text-align: left">
              <div style="padding:5px;">
              <i class="far fa-address-card"></i> {{ por.ID }}
              </div>
              <div style="padding:5px;">
              <i class="fas fa-phone-alt"></i> {{ por.Calling }}
              </div>
              <div style="padding:5px;">
                <i class="fab fa-whatsapp"></i> {{ por.Whatsapp }}
              </div>
            </p>
          </div>
          </va-card>
        </div>
      </va-card>
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
*::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #111;
}

.blur {
  backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  -ms-backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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
