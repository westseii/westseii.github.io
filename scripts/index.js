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
// sel other
const btnToyboxToggleTestColors = document.querySelector(".dti-btn-tc");

//
// code
document.title = `${project.name} - ${project.version}`;
pageTitle.innerHTML = project.name;
userGreet.innerHTML = `Hello, ${project.userName}`;
legalContent.innerHTML = legalHTML;

//
// toggle test colors
let testColorsOn = false;
function toggleTestColors() {
  testColorsOn ? disableTestColors() : enableTestColors();
}
function enableTestColors() {
  testColorsOn = true;
  _toggleTestColors();
}
function disableTestColors() {
  testColorsOn = false;
  _toggleTestColors();
}
function _toggleTestColors() {
  header.classList.toggle("bg-tc1");
  nav.classList.toggle("bg-tc2");
  pageContent.classList.toggle("bg-tc3");
  pageNotif.classList.toggle("bg-tc4");
  footer.classList.toggle("bg-tc1");
}

btnToyboxToggleTestColors.addEventListener("click", toggleTestColors);
