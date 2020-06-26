function loadPlaintext(targetElement, url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    switch (this.status) {
      case 200:
        targetElement.innerHTML = this.responseText;
        break;
      case 404:
        targetElement.innerHTML = "404";
        break;
    }
  };

  xhr.onerror = function () {
    console.log("xhr error");
  };

  xhr.send();
}

export default loadPlaintext;
