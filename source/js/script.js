let buttonMenu = document.querySelector(".page-header__toggle");
let dropMenu = document.querySelector(".navigation");
let header = document.querySelector(".page-header");
let navigation = document.querySelector(".navigation");

buttonMenu.classList.remove("page-header__toggle--clossed");
navigation.classList.remove("navigation--no-js");
header.classList.remove("page-header--no-js");
dropMenu.classList.remove("navigation--open");

buttonMenu.addEventListener("click", function () {
  if (buttonMenu.classList.toggle ("page-header__toggle--clossed")) {
    dropMenu.classList.remove("navigation--open");
    dropMenu.classList.add("navigation--open");
  } else {
    dropMenu.classList.add("navigation--open");
    dropMenu.classList.remove("navigation--open");
  }
})

// buttonMenu.onclick = () => {
//   buttonMenu.classList.toggle("page-header__toggle--clossed");
//   dropMenu.classList.toggle("navigation--open");
// };
