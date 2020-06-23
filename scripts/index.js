import project, { legalHTML } from "./westseii.temp.js";

document.title = project.name;

//
//
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

const headerTitle = document.querySelector(".header--title");
const headerGreetUser = document.querySelector(".header--greet-user");
const mainNav = document.querySelector(".main--nav");
const mainContent = document.querySelector(".main--content");
const mainNotify = document.querySelector(".main--notify");
const footerLegal = document.querySelector(".footer--legal");

const toybox = document.getElementById("toybox");
const btnToggleToybox = document.getElementById("btn-toggle-toybox");
const btnToggleBgcolors = document.getElementById("btn-toggle-bgcolors");

headerTitle.innerHTML = project.name;
headerGreetUser.innerHTML = `Hello, ${project.userName}`;
footerLegal.innerHTML = legalHTML;

//
// toybox - toggle vis
btnToggleToybox.addEventListener("click", () =>
  toybox.classList.toggle("toybox__display-none")
);

//
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
  { element: document.body, class: "bg-tc5" },
  { element: header, class: "bg-tc1" },
  { element: mainNav, class: "bg-tc2" },
  { element: mainContent, class: "bg-tc3" },
  { element: mainNotify, class: "bg-tc4" },
  { element: footer, class: "bg-tc1" },
];

function _toggleContrast() {
  for (const obj of toggleContrastArr) obj.element.classList.toggle(obj.class);
}

btnToggleBgcolors.addEventListener("click", toggleContrast);
