import { project, legalHTML } from "./westseii.temp.js";

const pageTitle = document.querySelector(".page-title");
const userGreet = document.querySelector(".user-greet");
const legalContent = document.querySelector(".legal");

document.title = `${project.name} - ${project.version}`;
pageTitle.innerHTML = project.name;
userGreet.innerHTML = `Hello, ${project.userName}`;
legalContent.innerHTML = legalHTML;
