const data = require('./data');
const loadCategories = require('./categories');
const loadElements = require('./elements');
// const categoryDom = require('./categoryDom');
const elementDom = require('./elementDom');
// const buttonEvent = require('./buttonEvent');

let categories = [];

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getCategories = () => {
  return categories;
  // console.log('getCategories', categories);
};

const onLoadFunction = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  setCategories(categoriesData);
  // categoryDom(categoriesData);
};

const whenElementsLoad = function () {
  const elementData = JSON.parse(this.responseText).movies;
  data.setElements(elementData);
  elementDom(elementData, categories);
  // console.log('elementData', elementData);
};

// const whenCategoriesLoad = function () {
//   const categoryData = JSON.parse(this.responseText).categories;
//   data.setCategories(categoryData);
//   loadElements(whenElementsLoad, failToLoad);
// };

const failToLoad = function () {
  console.log('There is nothing here!!');
};

const initializer = () => {
  loadCategories(onLoadFunction, failToLoad);
  loadElements(whenElementsLoad, failToLoad);
  // buttonEvent.
};

module.exports = {
  setCategories,
  getCategories,
  initializer,
};
