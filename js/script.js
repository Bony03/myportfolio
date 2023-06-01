const menuButton = document.querySelector(".nav__icon");
menuButton.addEventListener("click", function (e) {
  const menu = document.querySelector(".nav");
  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
    return;
  }
  menu.classList.add("opened");
});
function writeningTitleHandler(delay) {
  letterArray = [];
  const title = document.querySelector(".master-head__title");
  let i = 0;
  letterArray.length;
  let int = setInterval(() => {
    if (i === title.dataset.text.length) {
      clearInterval(int);
    }
    letterArray.push(title.dataset.text[i]);
    title.innerText = letterArray.join("");
    i++;
  }, delay);
}
function clickScrollHandler(elemId) {
  const item = document.getElementById(elemId);
  window.scrollTo({ behavior: "smooth", top: item.offsetTop });
}
function paralaxHandler(elem, multiplier) {
  elem.style.webkitMaskPositionY = multiplier * window.pageYOffset + "px";
  elem.style.maskPositionY = multiplier * window.pageYOffset + "px";
}
const moreButton = document.querySelector("content__more-button");

function moreHandler(button) {
  bemParentClass = button.classList.value.split("__")[0];
  const elem = document.querySelector("." + bemParentClass);
  const scroll = window.scrollY;
  if (elem.classList.contains("more")) {
    elem.classList.remove("more");
    button.innerText = "Show more";
    return;
  }
  elem.classList.add("more");
  button.innerText = "Hide";
  window.scrollTo({ behavior: "smooth", top: scroll });
}

window.addEventListener("load", function () {
  writeningTitleHandler(300);
});
window.addEventListener("scroll", function () {
  const mainImage = document.querySelector(".master-head__image");
  paralaxHandler(mainImage, 0.1);
});
