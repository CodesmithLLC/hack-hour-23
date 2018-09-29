// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


/**
 * 
 * @param {Object} array 
 */
function bubbleSort(array) {
  if (!Array.isArray(array)) return undefined;
  const sortedArr = JSON.parse(JSON.stringify(array));
  let didSwap = true;
  while (didSwap) {
    didSwap = false;
    sortedArr.forEach((num, index) => {
      if (index !== sortedArr.length - 1) {
        if (num > sortedArr[index + 1]) {
          sortedArr[index] = sortedArr[index + 1];
          sortedArr[index + 1] = num;
          didSwap = true;
        }
      }
    });
  }
  return sortedArr;
}

module.exports = bubbleSort;
