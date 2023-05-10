let buttonMenu = document.querySelector(".page-header__toggle");
let dropMenu = document.querySelector(".navigation");
let header = document.querySelector(".page-header");
let navigation = document.querySelector(".navigation");

let map = document.querySelector(".contacts");

navigation.classList.remove("navigation--no-js");
header.classList.remove("page-header--no-js");

buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("page-header__toggle--clossed");
  dropMenu.classList.toggle("navigation--open");
})

map.classList.remove("contacts--no-js");
