function loadPlaintext(targetElement, url) {
  const xhrObject = new XMLHttpRequest();

  xhrObject.open("GET", url, true);
  xhrObject.onload = function () {
    switch (this.status) {
      case 200:
        targetElement.innerHTML = this.responseText;
        break;
      case 404:
        targetElement.innerHTML = "404";
        break;
    }
  };

  xhrObject.onerror = function () {
    console.log("xhr error");
  };

  xhrObject.send();
}

export default loadPlaintext;
