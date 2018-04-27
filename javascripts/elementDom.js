// const data = require('./data');

const printToDom  = (theString, id) => {
  document.getElementById(id).innerHTML = theString;
};

// const categories = data.getCategories();
// const elements = data.getElements();

const printBothToDom = (elements, categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += `<div class="col-sm-6 category">`;
    domString += `<h2 data-category-id="${category.id}">${category.categoryName}</h2>`;
    elements.forEach((element) => {
      console.log('element?', element);
      if (element.categoryId === category.id) {
        console.log('category id', category.id);
        domString += `<div class="col-sm-4 elements">`;
        domString += `<div class="checkbox">`;
        domString += `<input id='${element.id}' class="element" type="checkbox">`;
        domString += `<label>${element.name}</label>`;
        domString +=  `</div>`;
        domString +=  `</div>`;
      };
      domString +=  `</div>`;
      printToDom(domString, 'output');
    }
    );
  });
};

module.exports = printBothToDom;
