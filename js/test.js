




$(document).ready(function () {
    $(".owl-carousel").owlCarousel({ items: 4, nav: true });
  });
  const navbar = {
    button: "",
    nav: document.querySelector(".main-nav"),
  };
  const schedule={
    schedule:document.querySelector("#Schedule"),
    buttons:document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day"),
};

function hideDays() {
    schedule.days.forEach((elm) => {
        elm.classList.remove("active");
    });
    schedule.buttons.forEach((elm) => {
        elm.classList.remove("active");
    });
}


schedule.buttons.forEach(function(elm,i) {
    elm.onclick=function(){
        hideDays();
        elm.classList.add("active");
        schedule.days[i].classList.add("active");
    };
});
  function scrollHandler(e) {
    if (window.pageYOffset > 300) navbar.nav.classList.add("fixed");
    else navbar.nav.classList.remove("fixed");
  }
  document.onscroll = scrollHandler;
  scrollHandler();