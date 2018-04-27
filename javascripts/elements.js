const loadElements = (whenElementsLoad, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', whenElementsLoad);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/movie-elements.json');
  myRequest.send();
};

module.exports = loadElements;
