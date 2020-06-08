<template>
  <div>
   <template v-for="club in clubs" >
     <div :key="club">
     {{club.Name}}
     </div>
   </template>




<div class="card2">
  <div class="thumbnail"><img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
  <div class="right">
    <h1>Why you Need More Magnesium in Your Daily Diet</h1>
    <div class="author"><img src="https://randomuser.me/api/portraits/men/95.jpg"/>
      <h2>Igor MARTY</h2>
    </div>
    <div class="separator"></div>
    <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
  </div>
  <h5>12</h5>
  <h6>JANUARY</h6>
  <ul>
    <li><i class="fa fa-eye fa-2x"></i></li>
    <li><i class="fa fa-heart-o fa-2x"></i></li>
    <li><i class="fa fa-envelope-o fa-2x"></i></li>
    <li><i class="fa fa-share-alt fa-2x"></i></li>
  </ul>
</div>

  </div>

</template>
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

// p {
//   text-align: justify;
//   text-justify: inter-word;
// }

.main {
  width: 77.5vw;
  margin: 0 auto;
  height: auto;
}

.card2 {
  position: relative;
  height: 450px;
  width: 900px;
  margin: 200px auto;
  background-color: #ffffff;
  -webkit-box-shadow: 10px 10px 93px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0 rgba(0, 0, 0, 0.75);
}

/* Image on the left side */
.thumbnail {
  float: left;
  position: relative;
  left: 30px;
  top: -30px;
  height: 320px;
  width: 530px;
  -webkit-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.75);
  overflow: hidden;
}

/* object-fit: cover; */

/* object-position: center; */

img.left {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* Right side of the card */
.right {
  margin-left: 590px;
  margin-right: 20px;
}

h1 {
  padding-top: 15px;
  font-size: 1.3rem;
  color: #4b4b4b;
}

.author {
  background-color: #9ecaff;
  height: 30px;
  width: 110px;
  border-radius: 20px;
}

.author > img {
  padding-top: 5px;
  margin-left: 10px;
  float: left;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

h2 {
  padding-top: 8px;
  margin-right: 6px;
  text-align: right;
  font-size: 0.8rem;
}

.separator {
  margin-top: 10px;
  border: 1px solid #c3c3c3;
}

p {
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
  color: #4b4b4b;
}

/* DATE of release */
h5 {
  position: absolute;
  left: 30px;
  bottom: -120px;
  font-size: 6rem;
  color: #c3c3c3;
}

h6 {
  position: absolute;
  left: 30px;
  bottom: -55px;
  font-size: 2rem;
  color: #c3c3c3;
}

/* Those futur buttons */
ul {
  margin-left: 250px;
}

li {
  display: inline;
  list-style: none;
  padding-right: 40px;
  color: #7b7b7b;
}

</style>
