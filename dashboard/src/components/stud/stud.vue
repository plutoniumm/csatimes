<template>
  <div>
    <div class="row">
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <!-- <img :src="require('../../assets/pics/hof.jpg')" width='170px'> -->
          <router-link :to="{ path: '../hall'}" append exact>
            <va-button color="danger"> Hall of Fame</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../startup'}" append exact>
            <va-button color="warning"> BITS Goa Startups</va-button>
          </router-link>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <a href='http://know-your-exam-schedule.herokuapp.com' target="_blank"><va-button color="info"> Exam Schedule</va-button></a>
        </va-card>
      </div>
      <div class="flex xs12 sm6 lg4 xl3" style="text-align: center;">
        <va-card>
          <router-link :to="{ path: '../clubs'}" append exact>
            <va-button color="success"> Clubs</va-button>
          </router-link>
        </va-card>
      </div>
    </div>

    <!-- DATA TABLE -->

    <va-card :title="('Humanities Reviews')" class="mb-2">
      <table class="va-table">
        <thead>
          <tr>
            <th>{{ $t('Course Name') }}</th>
            <th>{{ $t('Course IC') }}</th>
            <th>{{ $t('Course Code') }}</th>
            <th>{{ $t('Bulletin Description / Student Reviews') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.course }}</td>
            <td>{{ user.code }}</td>
            <td>{{ user.ic }}</td>
            <td>{{ user.ic }}</td>
          </tr>
        </tbody>
      </table>
    </va-card>
  </div>
</template>
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

<script>
import courses from './humanities.json'
export default {
  data () {
    return {
      users: courses.slice(),
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: #ffdcab;
}

</style>
