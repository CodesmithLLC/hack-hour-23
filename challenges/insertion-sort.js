// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // start with the 2nd element of the array to compare to the previous element of the array
  // loop through each element of the array
  for(let i = 1; i < array.length; i++) {
    // compare the current element with the previous elements of the array
    // assign current element to a temp variable
    let currElem = array[i];
    let j = i - 1;
    // compare if current element is less than previous element through a loop
    // if the current element is < previous element, shift the previous element to the right
    while(j >= 0 && array[j] > currElem) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currElem;
  }
  return array;
}

console.log(insertionSort([5,3,8,2,1,4]));

module.exports = insertionSort;