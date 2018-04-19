const loadCategories = (loadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/catgories.json');
  myRequest.send();
};

module.exports = loadCategories;
