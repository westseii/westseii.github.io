import { project, legalHTML } from "./westseii.temp.js";

// sel
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const pageContent = document.querySelector(".page-content");
const pageNotif = document.querySelector(".page-notif");
const footer = document.querySelector("footer");

const pageTitle = document.querySelector(".page-title");
const userGreet = document.querySelector(".user-greet");
const legalContent = document.querySelector(".legal");

const btnToysToggleColors = document.querySelector(".ti-btn-colors");

// code
document.title = `${project.name} - ${project.version}`;
pageTitle.innerHTML = project.name;
userGreet.innerHTML = `Hello, ${project.userName}`;
legalContent.innerHTML = legalHTML;

// toggle colors
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
function _toggleColors() {
  header.classList.toggle("bg-tc1");
  nav.classList.toggle("bg-tc2");
  pageContent.classList.toggle("bg-tc3");
  pageNotif.classList.toggle("bg-tc4");
  footer.classList.toggle("bg-tc1");
}

// events
btnToysToggleColors.addEventListener("click", toggleColors);
