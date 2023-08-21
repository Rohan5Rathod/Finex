const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");

const toggleNavbar = ()=>{
// alert("hello")
nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click",()=>toggleNavbar());


var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  speed: 600,
  parallax: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});