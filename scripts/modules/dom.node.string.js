const parser = new DOMParser();

//
/* converts a string of text into a usable DOM node */
/* single root node only */

function domNodeString(string) {
  const domNode = parser.parseFromString(string, "text/html").getRootNode().body
    .firstChild;

  return domNode;
}

export default domNodeString;
