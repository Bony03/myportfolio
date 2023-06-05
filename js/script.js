const menuButton = document.querySelector(".nav__icon");
menuButton.addEventListener("click", function (e) {
  const menu = document.querySelector(".nav");
  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
    window.document.body.style.overflow = "auto";
    return;
  }
  menu.classList.add("opened");
  window.document.body.style.overflow = "hidden";
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
const circles = document.querySelectorAll(".circle");
let myReq;
function update(time) {
  circles.forEach((circle, index) => {
    const angle = (time * (2 - index / 10)) / 5;
    circle.setAttribute("transform", `rotate(${angle} 0 0)`);
  });

  myReq = requestAnimationFrame(update);
}
update(1000);
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  cancelAnimationFrame(myReq);
  writeningTitleHandler(300);
});
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY < window.visualViewport.height * 1.3) {
    const mainImage = document.querySelector(".master-head__image");
    mainImage.style.webkitMaskPositionY =
      Math.round(0.15 * window.pageYOffset) + "px";
    mainImage.style.maskPositionY =
      Math.round(0.15 * window.pageYOffset) * window.pageYOffset + "px";
  }
});
const langItems = document.querySelectorAll(".languages__item");
langItems.forEach((item, index) => {
  console.log(index);
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.target.classList.contains("languages__item-title")) {
      const activeTitle = e.target;
      if (activeTitle.parentElement.classList.contains("selected")) {
        activeTitle.parentElement.classList.remove("selected");
        return;
      }
      activeTitle.parentElement.classList.add("selected");
      console.log(activeTitle.parentElement.style.gridRowStart);
      activeTitle.parentElement.style.gridRowStart = `${index + 1}`;
      activeTitle.parentElement.style.gridRowEnd = `${index + 3}`;
    }
  });
});
