const loadCategories = (onLoadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', onLoadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = loadCategories;
