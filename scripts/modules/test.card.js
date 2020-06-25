//
/* data */

const _testCardArr = [];

let _id = 0;

function _testCardObject(heading, ...paragraphs) {
  const object = {};
  object.heading = heading;
  object.paragraphs = paragraphs;
  object.id = _id;
  _id++;

  return object;
}

function _testCardElement(heading, ...paragraphs) {
  //
  /* build the test card element */

  const element = document.createElement("div");
  element.className = "test-card";

  const elementHeading = document.createElement("h2");
  elementHeading.innerHTML = heading;
  element.append(elementHeading);

  const para = document.createElement("p");
  para.className = "para";

  //
  /* test card elements must have one heading and ANY number of indented paragraphs */

  for (const sent of paragraphs) {
    const elementPara = para.cloneNode(false);
    elementPara.innerHTML = sent;
    element.append(elementPara);
  }

  return element;
}

//
/* default function */

function newTestCard(targetElement, heading, ...paragraphs) {
  _testCardArr.push(_testCardObject(heading, ...paragraphs));
  targetElement.append(_testCardElement(heading, ...paragraphs));
}

export default newTestCard;
export { _testCardArr };
