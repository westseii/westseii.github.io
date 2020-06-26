import project, { legalHTML } from "./westseii.temp.js";
import { $ } from "./modules/binds.js";
import newTestCard, { _testCardArr } from "./modules/test.card.js";
import newTestNotif, { _testNotifArr } from "./modules/test.notification.js";
import loadPlaintext from "./modules/load.plaintext.js";

//
/* selectors */

const toybox = $(".toybox");

const header = $(".header");
const headerTitle = $(".header__div__title");
const headerGreetUser = $(".header__div2__greet-user");
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

$(".display-date").innerHTML = `Today is ${project.date}.`;

//
/* ajax1 - load plaintext */

const testTargetElement1ClassName = ".ajax1-inner";
const testURL1 = "../test/text.txt";

const btnAjax1 = $(".btn-ajax1");
btnAjax1.addEventListener("click", () =>
  loadPlaintext($(".ajax1-inner"), testURL1)
);

//
/* ajax1 - clear plaintext */

const btnAjax1Clear = $(".btn-ajax1-clear");
btnAjax1Clear.addEventListener(
  "click",
  () => ($(testTargetElement1ClassName).innerHTML = "")
);

//
/* temp */

newTestNotif(
  mainNotify,
  "Test",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
);

newTestNotif(
  mainNotify,
  "Test",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
);

newTestNotif(
  mainNotify,
  "Test",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
);
