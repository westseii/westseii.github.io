import project, { legalHTML } from "./westseii.temp.js";

import { $ } from "./qol/binds.js";

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
const mainNotify = $(".main__notif");
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
  { element: mainNotify, class: "bg-tc4" },
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

function getZones(path) {
  fetch(path)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (zone) {
        mainContent.insertAdjacentHTML(
          "beforeend",
          `
          <div class="test-card">
            <h2>${zone.name}</h2>
            <p class="para">Region: ${zone.parent}</p>
            <p class="para">Span: ${zone.span}</p>
            <p class="para">Dungeon: ${zone.qDungeon}</p>
            <p class="para">Main hub: ${zone.hub}</p>
          </div>
          `
        );
      });
    });
}

getZones("../test/zones.json");

newTestNotif(
  mainNotify,
  "Notification",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
);
