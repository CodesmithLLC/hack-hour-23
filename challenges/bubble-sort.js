// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


/**
 * @param array {array}
 */

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
}

function bubbleSort(array) {


    //first Loop thr then
    for(let i =0; i < array.length; i++) {

        for(let j = i; j < array.length; j++) {
            if(array[i] > array[j]) {
                swap(i, j, array)
            }
        }
    }
    return array
}

module.exports = bubbleSort;
