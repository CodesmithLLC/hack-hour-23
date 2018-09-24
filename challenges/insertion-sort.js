// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function swapper(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
 }

function insertionSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let y = i+ 1; y < array.length; y++) {
           if(array[y] > array[i]) {
               swapper(array, i, y)
           }
        }
    }
 return array;
}
insertionSort([1,4,3,5,2])
module.exports = insertionSort;