const whenCatLoads = require('./categories');
const data = require('data');

const failToLoad = function () {
  console.log('There is nothing here!!');
};

const loadFunction = () => {

};

const initializer = () => {
  data.getCategories();
  whenCatLoads(loadFunction, failToLoad);
};

initializer();

module.exports = initializer;
