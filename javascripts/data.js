let elements = [];
// let totalAmount = [];

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;

};

// const getBudget = () => {
//   return budget;
// };

// const setBudget = () => {
//   budget = budgetArray;
// };

// let allElementCost = 0;
// const setTotal = (listOfElements) => {
//   console.log(listOfElements);
//   listOfElements.forEach((listOfElements) => {
//     allElementCost += listOfElements.cost;
//   });
// };

// const getTotal = () => {
//   return allElementCost;
// };

module.exports = {
  setElements,
  getElements,
  // setTotal,
  // getTotal,
};
