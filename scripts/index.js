import project, { legalHTML } from "./westseii.temp.js";

import { $ } from "./qol/binds.js";
import domNodeString from "./qol/dom.node.string.js";

import newTestCard, { _testCardArr } from "./modules/test.card.js";
import newTestNotif, { _testNotifArr } from "./modules/test.notif.js";

//
/* selectors */

const toybox = $(".toybox");

const header = $(".header");
const headerTitle = $(".header__title");
const headerGreetUser = $(".header__greet-user");
const mainNav = $(".main__nav");
const mainContent = $(".main__content");
const mainNotif = $(".main__notif");
const footer = $(".footer");
const footerLegal = $(".legal");

document.title = project.name;
headerTitle.innerHTML = project.name;
headerGreetUser.innerHTML = `Hello, ${project.userName} (temp)`;
footerLegal.innerHTML = legalHTML;

//
/* toggle toybox vis */

const btnShowToybox = $(".btn-basic--btn-show-toybox");
btnShowToybox.addEventListener("click", toggleToybox);
const btnHideToybox = $(".btn-hide-toybox");
btnHideToybox.addEventListener("click", toggleToybox);

function toggleToybox() {
  btnShowToybox.classList.toggle("hidden");
  toybox.classList.toggle("hidden");
}

//
/* toggle bg contrast colors */

const btnToggleBgColors = $(".btn-toggle-bg");
btnToggleBgColors.addEventListener("click", toggleContrast);

const toggleContrastArr = [
  { element: document.body, class: "bg-tc5" },
  { element: header, class: "bg-tc1" },
  { element: mainNav, class: "bg-tc2" },
  { element: mainContent, class: "bg-tc3" },
  { element: mainNotif, class: "bg-tc4" },
  { element: footer, class: "bg-tc1" },
];

function toggleContrast() {
  for (const obj of toggleContrastArr) obj.element.classList.toggle(obj.class);
}

//
/* show current date */

$(".display-date").innerHTML = project.date;

//
/* temp */

newTestCard(mainContent, "Test", "Test", "Test", "Test", "Test", "Test");

const testNotifCount = 5;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < testNotifCount; i++) {
      newTestNotif(mainNotif, json[i].completed, json[i].title);
    }
  });
