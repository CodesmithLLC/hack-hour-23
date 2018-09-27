// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j
    for (let j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;