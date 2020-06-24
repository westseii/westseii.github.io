import project, { legalHTML } from "./westseii.temp.js";
import newTestCard, { _testCardArr } from "./modules/test.card.js";
import newTestNotif, { _testNotifArr } from "./modules/test.notification.js";

document.title = project.name;

/* selectors */
const toybox = document.querySelector(".toybox");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

const headerTitle = document.querySelector(".header--title");
const headerGreetUser = document.querySelector(".header--greet-user");
const mainNav = document.querySelector(".main--nav");
const mainContent = document.querySelector(".main--content");
const mainNotify = document.querySelector(".main--notify");
const footerLegal = document.querySelector(".footer--legal");

const btnToggleBgColors = document.querySelector(".btn-toggle-bg-colors");
const btnShowToybox = document.querySelector(".btn-show-toybox");
const btnHideToybox = document.querySelector(".btn-hide-toybox");

headerTitle.innerHTML = project.name;
headerGreetUser.innerHTML = `Hello, ${project.userName}`;
footerLegal.innerHTML = legalHTML;

/* toggle contrast */
let isContrasted = false;

function toggleContrast() {
  isContrasted ? disableContrast() : enableContrast();
}

function enableContrast() {
  isContrasted = true;
  _toggleContrast();
}

function disableContrast() {
  isContrasted = false;
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

/* show/hide toybox */
function toggleToybox() {
  btnShowToybox.classList.toggle("display-none");
  toybox.classList.toggle("display-none");
}

/* events - buttons */
btnToggleBgColors.addEventListener("click", toggleContrast);
btnShowToybox.addEventListener("click", toggleToybox);
btnHideToybox.addEventListener("click", toggleToybox);

export { mainContent, mainNotify };

/* TEST !!!!!!!!!!!!!!! */
toggleToybox();

newTestCard(mainContent, "Test");

newTestCard(
  mainContent,
  "Test 2",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, at porro. Nostrum quasi placeat totam sequi?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum maxime nobis corrupti est nostrum omnis accusamus quos consequuntur. Obcaecati voluptas ad culpa rerum fuga eaque cum, at consectetur eos praesentium minima nihil incidunt perferendis! Rem facilis ipsa corporis enim, voluptatem autem voluptatibus natus maiores vel sequi ut hic expedita sint in, fugiat quidem ducimus cum? Nihil voluptatibus ipsum et quidem magni, ullam laudantium debitis quod neque vitae sapiente animi nemo vel voluptas sunt iste aliquam dignissimos perspiciatis aperiam reprehenderit mollitia. Sapiente nulla expedita magni autem corporis nemo, fugiat tenetur molestias eum quam neque reiciendis. Quia culpa tempora eveniet laboriosam ad excepturi veniam blanditiis natus nisi, labore delectus ab sapiente ipsa voluptatibus.",
  "adios"
);

newTestNotif(
  mainNotify,
  "Test",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
);

newTestNotif(mainNotify, "Test 2", "Lorem ipsum dolor sit.");

newTestNotif(
  mainNotify,
  "Test 3",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, aperiam nobis sunt omnis esse sequi dolores, ex, laborum magnam earum est repellat neque eum ut? Velit fugit numquam doloremque, quaerat beatae excepturi!"
);

newTestNotif(mainNotify, "Test 4", "Lorem ipsum dolor sit.");

newTestNotif(mainNotify, "Test 5", "Lorem ipsum dolor sit.");

// window._testCardArr = _testCardArr;
// window._testNotifArr = _testNotifArr;
