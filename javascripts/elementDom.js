// const data = require('./data');

const printToDom  = (theString, id) => {
  document.getElementById(id).innerHTML = theString;
};

// const categories = data.getCategories();
// const elements = data.getElements();

const printAll = (elements, categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += `<div class="col-sm-11 category">`;
    domString += `<h2 data-category-id="${category.id}">${category.categoryName}</h2>`;
    elements.forEach((element) => {
      if (element.categoryId === category.id) {
        domString += `<div class="col-sm-3 elements">`;
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

module.exports = printAll;
