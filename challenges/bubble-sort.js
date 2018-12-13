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


// function bubbleSort(arr) {
//   // set a boolean to check if we swapped
//   let swapped = true;

//   // iterate while boolean is true
//   while (swapped) {
//     // set the boolean to false
//     swapped = false;

//     // iterate to the end of the array
//     for (let i = 0; i < arr.length - 1; i += 1) {
//       // if the next element is smaller than the current, swap
//       if (arr[i + 1] < arr[i]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         // set the boolean to true
//         swapped = true;
//       }
//     }
//   }

//   // return the array
//   return arr;
// }

// // More Efficient
// function bubbleSort(arr) {
//   for (let tail = arr.length - 1; tail > 0; tail -= 1) {
//     for (let i = 0; i < tail; i += 1) {
//       // if the next element is smaller than the current, swap
//       if (arr[i + 1] < arr[i]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }
  
//   return arr;
// }

