
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
        <img src="${club.Logo}" style="border-radius: 3%" width="95%"></div>
            ${People(club.PORs)}
        </div>
    </div>
    <br>
    <h5>Founded ${club.Founded}</h5>
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
