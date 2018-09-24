// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort




const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let val = arr[i];
    let j;
    for (j = i - 1; j > - 1 && arr[j] > val; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
};

console.log(insertionSort([1,4,3,2,5]));
module.exports = insertionSort;