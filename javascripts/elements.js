const loadElements = (onLoadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', onLoadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/elements.json');
  myRequest.send();
};

module.exports = loadElements;
