$(".logo-toggle").click(function () {
  $(".sibar-left").toggle();
});

$(".menu-toggle").click(function () {
  console.log('clicked --')
  $(".sibar-nav").toggle();
});

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

$(".support-").click(function () {
  $(".donation-form").removeClass('d-none').addClass('d-block')
  $(".main-view").removeClass('d-block').addClass('d-none')

  if ($(window).width() < 767) {
    $(".sibar-left").css("display", "none");
  } 
});

$(".donationback").click(function () {
  $(".donation-form").removeClass('d-block').addClass('d-none')
  $(".main-view").removeClass('d-none').addClass('d-block')
});
