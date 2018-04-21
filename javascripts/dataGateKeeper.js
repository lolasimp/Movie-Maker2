const whenCategoriesLoads = require('./categories');
const data = require('./data');

const failToLoad = function () {
  console.log('There is nothing here!!');
};

const loadFunction = () => {

};

const initializer = () => {
  data.getCategories();
  whenCategoriesLoads(loadFunction, failToLoad);
};

initializer();

module.exports = initializer;
