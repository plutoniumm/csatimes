<template>
  <div>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
hdxzzzzzzzzz
     <template v-for="(club) in clubs">
      <div :key="club.Name">
        <br>
        <div class="container" style="width: 80%; text-align: left;">
          <h1>{{club.Name}}</h1>
          <p style="color: rgb(153, 153, 153);">{{club.Description}}</p>
        </div>
        <br>
        <div class="main">
          <div class="slider">
            <div class="container" style="width: 80%; text-align: left;">
              <!-- <img :src="require('../../assets/' + club.Logo)" style="border-radius: 3%;" width="95%"> -->
              <template v-for="(por) in club.PORs">
                <div style="word-wrap: break-word;" :key="por.Name">
                  <div style="text-align: left; display: grid; grid-template-rows: auto;">
                   <!-- <div><img :src="require('../../assets/' + por.Photo)" :alt="por.Name" width="95%" height="auto" style="border-radius: 3%;"></div> -->
                    <div><h4 style="color: rgb(0, 122, 255);">{{por.Name}}</h4>
                      <br><h5 style="color: black; line-height: 50%;">{{por.Title}}</h5>
                      <br><p style="color: rgb(153, 153, 153); word-wrap: break-word;">{{por.Phone}}<br>{{por.Email}}</p></div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <br>
        <h5>Founded {{club.Founded}}</h5>
        <hr style="width: 80%;">
        <br>
      </div>
    </template>

  </div>

</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<script>
import data from './pclubs.json'
export default {
data()
  {
    return {
      clubs: data
    }
  }
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
