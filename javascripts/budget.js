const data = require('./data');
const getProgressBarVal = require('./progressBar');

const printBudget = (budgetInput) => {
  const getShowBudget = document.getElementById('results-cost');
  let domString = '';
  domString += `<h2>$${budgetInput}</h2>`;
  getShowBudget.innerHTML = domString;
};

const getBudget = (e) => {
  let budget = 0;
  const budgetBtn = document.getElementById('budget-btn');
  budgetBtn.addEventListener('click',() => {
    console.log('budget', e);
    const budgetInput = document.getElementById('startingBudget').value;
    budget = budgetInput;
    printBudget(budget);
    data.setBudget(budget);
    getProgressBarVal();
  });
};

module.export = getBudget;
