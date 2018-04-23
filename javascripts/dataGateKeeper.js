const loadCategories = require('./categories');
const loadElements = require('./elements');
const data = require('./data');
// const elementDom = require('./elementDom');
// const buttonEvent = require('./buttonEvent');

// const onLoadFunction = function () {
//   const categoriesData = JSON.parse(this.responseText).categories;
//   data.setCategories(categoriesData);
// };

const whenElementsLoad = function () {
  const elementData = JSON.parse(this.responseText).movieElements;
  data.setElements(elementData);
  // elementDom();
  // console.log('elementData', elementData);
};

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
  loadElements(whenElementsLoad, failToLoad);
};

const failToLoad = function () {
  console.log('There is nothing here!!');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, failToLoad);
  // buttonEvent.
};

module.exports = {
  initializer,
};
