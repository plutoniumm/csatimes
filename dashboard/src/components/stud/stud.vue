<template>
  <div>
    <div class="row">
      <div class="flex xs3" style="display: inline-block; text-align: center;">
        <va-card>
          <!-- <img :src="require('../../assets/pics/hof.jpg')" width='170px'> -->
          <router-link :to="{ path: '../hall'}" append exact>
            <va-button color="danger"> Hall of Fame</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs3" style="display: inline-block; text-align: center;">
        <va-card>
          <router-link :to="{ path: '../startup'}" append exact>
            <va-button color="warning"> BITS Goa Startups</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs3" style="display: inline-block; text-align: center;">
        <va-card>
          <router-link :to="{ path: '../humanities'}" append exact>
            <va-button color="success"> Humanities Electives</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs3" style="display: inline-block; text-align: center;">
        <va-card>
          <a href='http://know-your-exam-schedule.herokuapp.com' target="_blank"><va-button color="info"> Exam Schedule</va-button></a>
        </va-card>
      </div>
    </div>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>
<script>
export default {
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
body {
  background-color: rgb(32, 61, 82);
}

</style>
