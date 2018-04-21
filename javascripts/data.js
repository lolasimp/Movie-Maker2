<<<<<<< setup
let elements = [];
=======
const elements = [];
>>>>>>> master
const categories = [];

const getCategories = (categoriesArray) => {
  return categories;
  // console.log('getCategories', categories);
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

<<<<<<< setup
const getElements = (elementsArray) => {
  return elements;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
=======
const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = (elementsArray) => {
  return elements;
>>>>>>> master
};

const getElementsByCategories = (categoriesId) => {
  const selectedElements = [];
  elements.forEach((element) => {
    if (element.categoriesId === categoriesId) {
      selectedElements.push(element);
    }
  });
  return selectedElements;
};

module.exports = {
  getCategories,
  setCategories,
  setElements,
  getElements,
  getElementsByCategories,
};
