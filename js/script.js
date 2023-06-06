const data = [
  {
    text: "I can create the basic structure of a web page, create lists, insert images and SVG, create hyperlinks, make tables, and format email newsletters using table-based layout. I can also create form layouts, fields, and dropdown menus.",
    image: "./static/skills/html.svg",
    title: "html",
    id: 1,
  },
  {
    text: "I can add styles to markup both through importing in HTML documents and using the 'style' tag. I can add inline styles, customize colors, images, and their shapes, apply gradients, set sizes, margins, create animations, frames, and transitions. I can create responsive layouts to optimize the display of the page on various devices. I use selectors to target specific elements, work with pseudo-classes and pseudo-elements, adjust element positioning, utilize Flexbox and Grid systems for layout placement. I optimize and structure CSS code using selectors, classes, and identifiers.",
    image: "./static/skills/css.svg",
    title: "css",
    id: 2,
  },
  {
    text: "I have skills in working with event handlers, responding to clicks, mouse hover, key input, page loading, etc. I can modify the content and structure of web pages, add, delete, and modify elements, change styles and attributes of elements. I can manipulate the size and properties of images, send and receive data from the server, exchange data in JSON format, work with APIs. I can manipulate forms: retrieve and validate input data, submit forms to the server, validate fields. I am familiar with promises, async/await for handling asynchronous operations, making server requests without blocking the main thread. I can perform various operations with dates and times, handle errors, perform search, replacement, and extraction on primitives, work with logical operators and loops.",
    image: "./static/skills/js.svg",
    title: "javascript",
    id: 3,
  },
  {
    text: "After learning the library, I will have the skills to develop efficient and scalable web applications using a component-based approach, create reusable components, manage the state of the application using React Hooks, use props to pass data between components, program event handlers and interact with users through components, use built-in forms and create custom ones for data collection and validation, use routing for navigation between pages in your application, optimize component rendering using keys, memoization, and lazy loading, use external libraries and plugins to extend the capabilities of React, interact with servers through requests, optimize application performance, ensure fast rendering and responsiveness, support and enhance existing React projects.",
    image: "./static/skills/react.svg",
    title: "react",
    id: 4,
  },
  {
    text: "I can manage the application state with centralized data storage, break down the application into independent components that can interact with the stored data, create actions to trigger state changes, create reducers to handle those changes, create selectors to choose specific data portions, create and extend middleware to perform additional actions and asynchronous operations when interacting with the server using Redux-Thunk, develop scalable and easily manageable projects using Redux, and also maintain existing projects.",
    image: "./static/skills/redux.svg",
    title: "redux",
    id: 5,
  },
  {
    text: "I can develop server-side applications using JavaScript, utilize Node.js to create APIs and interact with databases, manage the file system and perform file and folder operations, develop real-time applications using web sockets, utilize the modular system in Node.js to organize code and facilitate code reuse, interact with databases, develop advanced applications using third-party packages and libraries, deploy and manage servers using solutions like Express or Nest.js, and use streams for efficient processing of large data volumes.",
    image: "./static/skills/node.svg",
    title: "nodejs",
    id: 6,
  },
  {
    text: "I am proficient in storing and retrieving data in MongoDB, which is a non-relational (NoSQL) database. I can design and create document collections, perform CRUD operations (create, read, update, delete) on data, and utilize data replication and sharding for high availability and scalability of the system.",
    image: "./static/skills/mongo.svg",
    title: "mongodb",
    id: 7,
  },
];

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

const wrapper = document.querySelector(".slider");
const arrayList = data.map((item) => {
  return `
    <li class="slider__item" key="${item.id}" onclick="itemDetail(this.attributes.key.value)">
        <img class="slider__image" src=${item.image} alt=${item.title} />
        <h3 class="slider__title">${item.title}</h3>
    </li>
  `;
});
wrapper.firstElementChild.innerHTML = arrayList.join("\n");
let activeSkill = null;
function itemDetail(id = 1) {
  if (activeSkill === id) {
    return;
  }
  activeSkill = id;
  window.document.body.style.overflow = "hidden";
  const backgroundWrapper = document.querySelector(".background");
  backgroundWrapper.style.transform = "translate(0, 100%)";
  backgroundWrapper.style.opacity = "0";
  setTimeout(() => {
    data.forEach((item) => {
      if (item.id === Number(id)) {
        backgroundWrapper.innerHTML = `
        <div class="background__image" key=${item.id} >
          <img class="background__img" src="${item.image}" alt=${item.title} />
        </div>
        <div class="background__content">
          <h1 class="background__title">${item.title}</h1>
          <p class="background__text">${item.text}</p>
        </div>
        `;
        backgroundWrapper.style.transform = "translate(0, 0)";
        backgroundWrapper.style.opacity = "1";
      }
    });
  }, 200);
  window.document.body.style.overflow = "auto";
}
itemDetail();
