// const progressBar = (element) => {
//   const progress = document.getElementsByClassName('progress-bar');
//   const selectedCategories = [...new Set(element.map(item => item.categoryId)),];
//   if (selectedCategories.length === 1) {
//     progress.classList.add('percent25');
//   } else if (selectedCategories.length === 2) {
//     progress.classList.remove('percent25');
//     progress.classList.add('percent50');
//   } else if (selectedCategories.length === 3) {
//     progress.classList.remove('percent25', 'percent50');
//     progress.classList.add('percent75');
//   } else if (selectedCategories.length >= 4) {
//     progress.classList.remove('percent25', 'percent50', 'percent75');
//     progress.classList.add('percent100');
//   }
// };

const data = require('./data');

const getProgressBarVal = () => {
  const budget = data.getBudget();
  console.log('budget:', budget);
};

module.exports = getProgressBarVal;
