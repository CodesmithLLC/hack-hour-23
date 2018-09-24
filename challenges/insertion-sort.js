// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  // Guard clauses
  if (!Array.isArray(array)) {
    return 0;
  }

  if (array.length <= 1) {
    return 0;
  }

  let i = 1;
  while (i < array.length) {
    let j = i;
    while (( j > 0) && (array[j-1] > array[j])) {
      let temp;
      temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j = j - 1;
    }
    i = i + 1;
  }
  return array;
}

console.log(insertionSort([8, 2, 4]));

module.exports = insertionSort;