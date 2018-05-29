// const dataGateKeeper = require('./dataGateKeeper');
// const data = require('./data');

// const budgetButton = document.getElementById('budget-btn');
// const resultsCost = document.getElementById('results-cost');

const checkedBox = (e) => {
  if ($.checked === e.cost) {
    console.log(e);
  }
};

module.exports = {
  checkedBox,
};
