
function Slides(por){
    return `
    <div style="word-wrap: break-word">
    <div style="
  text-align:left;
  display: grid;
  grid-template-rows: auto;">
<div><img src="${por.Photo}" width="95%" height="auto" style="border-radius: 3%"></div>
<div><h4 style="color: rgb(0, 122, 255);">${por.Name}</h4>
<br><h5 style="color: black; line-height: 50%;">${por.Title}</h5>
<br><p style="color: rgb(153,153,153);word-wrap: break-word;">${por.Phone}<br>${por.Email}</p></div>
</div>

    </div>
    
    `
}

function People(cordis){
    return`
    ${cordis.map(Slides).join('')}
    `
}

function ClubHeader(club){
    return `<br>
    <div class="container" style="width: 80%; text-align: left;">
    <h1>${club.Name}</h1>
    <p style="color: rgb(153, 153, 153);">${club.Description}</p>
    </div>
    <br>
    <div class="main">
        <div class="slider">
        <div class="container" style="width: 80%; text-align: left;">
        <img src="${club.Logo}" style="border-radius: 2%" width="75%"></div>
            ${People(club.PORs)}
        </div>
    </div>
    <br>
    <p>Founded ${club.Founded}</p>
    <hr style="width: 80%;">
    <br>`

}

document.getElementById("clubdata").innerHTML = `
    ${techclubs.map(ClubHeader).join('')}
`


$(document).on('ready', function () {
    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
});

function cors() {

  // Allow from any origin
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
      // you want to allow, and if so:
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }

  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          // may also be using PUT, PATCH, HEAD etc
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

      exit(0);
  }
}

