var hamburger = document.querySelector(".hamburger");
var navList = document.querySelector(".list");

hamburger.addEventListener("click", function () {
 navList.classList.toggle("hidden");
});

window.onscroll = function () {
 var header = document.querySelector(".header");
 var fixedNav = header.offsetTop;

 if (window.pageYOffset > fixedNav) {
  header.classList.add("navbar-fixed");
 } else {
  header.classList.remove("navbar-fixed");
 }
};

var tema = document.querySelector(".tema");
var namaTema = document.querySelector(".nama-tema");
tema.addEventListener("click", function () {
 if (document.documentElement.classList.toggle("dark")) {
  namaTema.innerHTML = "MODE : LIGHT";
 } else {
  namaTema.innerHTML = "MODE : DARK";
 }
});
