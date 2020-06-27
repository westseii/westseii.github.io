import project, { legalHTML } from "./westseii.temp.js";

import { $ } from "./qol/binds.js";
// import domNodeString from "./qol/dom.node.string.js";
import loadPlaintext from "./qol/load.plaintext.js";
// import randomIntInclusive from "./qol/random.int.inclusive.js";

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
/* ajax2 - load JSON - todo */

function loadTodo(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    switch (this.status) {
      case 200:
        const todo = JSON.parse(this.responseText);
        $(".ajax2-todo").innerHTML = `
        <p>${todo.name}</p>
        <p>${todo.desc}</p>
        `;
        break;
      case 404:
        $(".ajax2-todo").innerHTML = "<p>404</p>";
        break;
    }
  };

  xhr.send();
}

const btnAjax2todo = $(".btn-ajax2-todo");
btnAjax2todo.addEventListener("click", () => {
  loadTodo("../test/todo.json");
});

//
/* ajax2 - load JSON - todos */

function loadTodos(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    switch (this.status) {
      case 200:
        const todoList = JSON.parse(this.responseText);
        let HTML = "";
        for (const todo of todoList) {
          HTML += `
          <p>${todo.name}</p>
          <p>${todo.desc}</p>
          `;
        }
        $(".ajax2-todos").innerHTML = HTML;
        break;
      case 404:
        $(".ajax2-todos").innerHTML = "<p>404</p>";
        break;
    }
  };

  xhr.send();
}

const btnAjax2todos = $(".btn-ajax2-todos");
btnAjax2todos.addEventListener("click", () => {
  loadTodos("../test/todos.json");
});

//
//

newTestNotif(mainNotify, "notification", "notification");
