import project from "../westseii.temp.js";

const _testNotifArr = [];

let _id = 0;

function _testNotifObject(heading, text) {
  const object = {};
  object.heading = heading;
  object.text = text;
  object.id = _id;
  _id++;

  return object;
}

function _testNotifElement(heading, text) {
  const element = document.createElement("div");
  element.className = "test-notif";

  const HTML = `
  <div class="test-notif--top">
    <span>${heading}</span>
    <span>${project.date}</span>
  </div>
  <span>${text}</span>
  `;
  element.innerHTML = HTML;

  return element;
}

function newTestNotif(targetElement, heading, text) {
  _testNotifArr.push(_testNotifObject(heading, text));
  targetElement.append(_testNotifElement(heading, text));
}

export default newTestNotif;
export { _testNotifArr };
