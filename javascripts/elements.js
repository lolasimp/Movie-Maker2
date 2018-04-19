const loadElements = (loadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/movie-elements.json');
  myRequest.send();
};

module.exports = loadElements;
