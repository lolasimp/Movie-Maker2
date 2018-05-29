let elements = [];
let budget = 0;
let nowCost = [];
let totalCostVal = 0;
// let totalAmount = [];

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;

};

const getBudget = () => {
  return budget;
};

const setBudget = (budgetArray) => {
  budget = budgetArray;
};

const setNowCost = (nowCost) => {
  console.log(nowCost);
  nowCost.push(nowCost);
};

const removeNowCost = (removedId) => {
  nowCost = nowCost.filter(c => c.id !== removedId);
};

const getNowCost = () => {
  return nowCost;
};

const totalCost = () => {
  totalCostVal = nowCost.reduce((totalCost, nowCost) => {
    return totalCost + nowCost.cost;
  }, 0);
  return totalCostVal;
};

const getTotalCostVal = () => {
  return totalCostVal;
};

module.exports = {
  setElements,
  getElements,
  getBudget,
  setBudget,
  setNowCost,
  removeNowCost,
  getNowCost,
  totalCost,
  getTotalCostVal,
};
