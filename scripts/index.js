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

const toybox = document.querySelector(".toybox");
const btnToggToybox = document.querySelector(".btn-togg-toybox");
const btnBgColor = document.getElementById("btn-bg-color");

// code
document.title = project.name;

pageTitle.innerHTML = project.name;
userGreet.innerHTML = `Hello, ${project.userName}`;
legalContent.innerHTML = legalHTML;

//
// toybox - show/hide
btnToggToybox.addEventListener("click", () =>
  toybox.classList.toggle("toybox--display-none")
);

// toybox - toggle contrast
let contrastEnabled = false;

function toggleContrast() {
  contrastEnabled ? disableContrast() : enableContrast();
}

function enableContrast() {
  contrastEnabled = true;
  _toggleContrast();
}

function disableContrast() {
  contrastEnabled = false;
  _toggleContrast();
}

const toggleContrastArr = [
  { element: header, attribute: "bg-tc1" },
  { element: nav, attribute: "bg-tc2" },
  { element: pageContent, attribute: "bg-tc3" },
  { element: pageNotif, attribute: "bg-tc4" },
  { element: footer, attribute: "bg-tc1" },
];

function _toggleContrast() {
  for (const obj of toggleContrastArr)
    obj.element.classList.toggle(obj.attribute);
}

btnBgColor.addEventListener("click", toggleContrast);
