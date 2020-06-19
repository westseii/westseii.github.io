import { project, legalHTML } from "./westseii.temp.js";

//
// sel
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const pageContent = document.querySelector(".page-content");
const pageNotif = document.querySelector(".page-notif");
const footer = document.querySelector("footer");

const pageTitle = document.querySelector(".page-title");
const userGreet = document.querySelector(".user-greet");
const legalContent = document.querySelector(".legal");

//
const btnToysToggleColors = document.querySelector(".ti-btn-colors");

//
// code
document.title = project.name;

pageTitle.innerHTML = project.name;
userGreet.innerHTML = `Hello, ${project.userName}`;
legalContent.innerHTML = legalHTML;

//
// toys - toggle colors
let colorsEnabled = false;

function toggleColors() {
  colorsEnabled ? disableColors() : enableColors();
}

function enableColors() {
  colorsEnabled = true;
  _toggleColors();
}

function disableColors() {
  colorsEnabled = false;
  _toggleColors();
}

const toggleColorsArr = [
  { element: header, attribute: "bg-tc1" },
  { element: nav, attribute: "bg-tc2" },
  { element: pageContent, attribute: "bg-tc3" },
  { element: pageNotif, attribute: "bg-tc4" },
  { element: footer, attribute: "bg-tc1" },
];

function _toggleColors() {
  for (const obj of toggleColorsArr)
    obj.element.classList.toggle(obj.attribute);
}

btnToysToggleColors.addEventListener("click", toggleColors);
