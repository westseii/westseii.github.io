import project, { legalHTML } from "./westseii.temp.js";
import { $ } from "./modules/binds.js";
import newTestCard, { _testCardArr } from "./modules/test.card.js";
import newTestNotif, { _testNotifArr } from "./modules/test.notification.js";
import loadPlaintext from "./modules/load.plaintext.js";

//
/* selectors */

const toybox = $(".toybox");

const header = $(".header");
const headerTitle = $(".header--title");
const headerGreetUser = $(".header--greet-user");
const mainNav = $(".main--nav");
const mainContent = $(".main--content");
const mainNotify = $(".main--notify");
const footer = $(".footer");
const footerLegal = $(".footer--legal");

document.title = project.name;
headerTitle.innerHTML = project.name;
headerGreetUser.innerHTML = `Hello, ${project.userName}`;
footerLegal.innerHTML = legalHTML;

//
/* toggle toybox vis */

const btnShowToybox = $(".btn-show-toybox");
btnShowToybox.addEventListener("click", toggleToybox);
const btnHideToybox = $(".btn-hide-toybox");
btnHideToybox.addEventListener("click", toggleToybox);

function toggleToybox() {
  btnShowToybox.classList.toggle("display-none");
  toybox.classList.toggle("display-none");
}

//
/* toggle bg contrast colors */

const btnToggleBgColors = $(".btn-toggle-bg-colors");
btnToggleBgColors.addEventListener("click", toggleContrast);

let isContrasted = false;

const toggleContrastArr = [
  { element: document.body, class: "bg-tc5" },
  { element: header, class: "bg-tc1" },
  { element: mainNav, class: "bg-tc2" },
  { element: mainContent, class: "bg-tc3" },
  { element: mainNotify, class: "bg-tc4" },
  { element: footer, class: "bg-tc1" },
];

function toggleContrast() {
  if (isContrasted) {
    isContrasted = false;
    _toggleContrast();
  } else {
    isContrasted = true;
    _toggleContrast();
  }
}

function _toggleContrast() {
  for (const obj of toggleContrastArr) obj.element.classList.toggle(obj.class);
}

//
/* show current date */

$(".test-card-date").innerHTML = `Today is ${project.date}.`;

//
/* ajax1 - load plaintext */

const testTargetElement1ClassName = ".ajax-1-inner";
const testURL1 = "../test/text.txt";

const btnAjax1 = $(".btn-ajax-1");
btnAjax1.addEventListener("click", () =>
  loadPlaintext($(".ajax-1-inner"), testURL1)
);

//
/* ajax1 - clear plaintext */

const btnAjax1Clear = $(".btn-ajax-1-clear");
btnAjax1Clear.addEventListener(
  "click",
  () => ($(testTargetElement1ClassName).innerHTML = "")
);

//
/* temp */

newTestNotif(
  mainNotify,
  "Notification",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, molestiae ipsam! Iste, cupiditate necessitatibus! Nihil, cumque."
);
