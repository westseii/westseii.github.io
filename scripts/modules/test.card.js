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
  const element = document.createElement("div");
  element.className = "test-card";

  const elementHeading = document.createElement("h2");
  elementHeading.innerHTML = heading;
  element.append(elementHeading);

  const para = document.createElement("p");
  para.className = "para";

  for (const s of paragraphs) {
    const elementPara = para.cloneNode(false);
    elementPara.innerHTML = s;
    element.append(elementPara);
  }

  return element;
}

function newTestCard(targetElement, heading, ...paragraphs) {
  _testCardArr.push(_testCardObject(heading, ...paragraphs));
  targetElement.append(_testCardElement(heading, ...paragraphs));
}

export default newTestCard;
export { _testCardArr };