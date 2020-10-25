<template>
  <div>
    <div v-for="club in clubs" :key="club" style="margin: 10px 0">
      <va-card style="background: #ddd">
        <span style="font-size: 2rem">{{ club.Club }}</span>
        <hr />
        <div>{{ club.Description }}</div>
        <div style="display: flex; overflow-x: scroll">
          <va-card no-padding
            :style="{minWidth: '400px', width: '500px', margin: '0 10px', background: `url(${club.icon || 'https://i.imgur.com/hqCBTK8.png'}) no-repeat center center`, overflow:'hidden', backgroundSize:'cover'}"
            v-for="por in club.Pors"
            :key="por"
          >
          <div class="blur" style="background:#0006;padding:15px;color:#fff;border-radius:8px;">

            <h1 style="font-size: 1.5rem">{{ por.Name }}</h1>
            {{ por.Post }}
            <p style="padding: 7px; text-align: left">
              <div style="padding:2px;">
              <i class="far fa-address-card"></i> {{ por.ID }}
              </div>
              <div style="padding:2px;">
              <i class="fas fa-phone-alt"></i> {{ por.Calling }}
              </div>
              <div style="padding:2px;">
                <i class="fab fa-whatsapp"></i> {{ por.Whatsapp }}
              </div>
            </p>
          </div>
          </va-card>
        </div>
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
