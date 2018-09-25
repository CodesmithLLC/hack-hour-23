// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  // guard clauses
  if (!Array.isArray(array)) return undefined;
  if (array.length === 1) return array;
  const result = JSON.parse(JSON.stringify(array));
  result.forEach((num, index) => {
    for (let i = 0; i < index; i++) {
      if (num < result[i]) {
        result.splice(i, 0, result.splice(index, 1)[0]);
        break;
      }
    }
  });
  return result;
}

module.exports = insertionSort;