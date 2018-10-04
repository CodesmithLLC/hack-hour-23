// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


/**
 * Sorts the array in bubblesort
 * @param {array} array 
 */
function bubbleSort(array) {
 let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if(array[i - 1] > array[i]) {
        const temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        swapped = true;
      } 
    }
  }
  return array;
}

// console.log(bubbleSort([5,45,32,61,112,1,6]));

module.exports = bubbleSort;
