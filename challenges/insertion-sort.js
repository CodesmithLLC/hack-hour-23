// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array, index = 1) {
   if (index === array.length) return array;
   for (let i = index; i > 0 && array[i] < array[i - 1]; i--) {
       let temp = array[i];
       array[i] = array[i - 1];
       array[i - 1] = temp;
   }
   return insertionSort(array, ++index);
}

const test = [2,5,7,4,3,9,4,5]
console.log(insertionSort(test))

module.exports = insertionSort;