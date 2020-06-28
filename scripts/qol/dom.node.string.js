const parser = new DOMParser();

//
/* parses a string of text and returns a single DOM node */

function domNodeString(string) {
  const domNode = parser.parseFromString(string, "text/html").getRootNode().body
    .firstChild;

  return domNode;
}

export default domNodeString;
