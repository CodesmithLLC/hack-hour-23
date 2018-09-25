// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        for(let j = i; j >= 0; j--) {
            if(array[j] < array[i]) {
              array.splice(j+1, 0, array[i]);
              array.splice(i+1, 1);
              break;
            }
            if (j === 0) {
              array.splice(0, 0, array[i]);
              array.splice(i+1, 1);
            }
        }
    }

    return array;
}

module.exports = insertionSort;