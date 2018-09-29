// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  //start with first two indices 
  // set sorted pointer
  // compare the two elements and switch the greater one 
  // console.log(array)
  let sortedPointer = 0;

  // while sortedPointer is not fully sorted
  while (sortedPointer !== array.length - 1) {
    // console.log(array);
    // iterate through the array up to sortedPointer
    for(let x = 0; x < array.length - sortedPointer - 1; x += 1) {
      // console.log(array);
      //check if the element at array + 1 exists
      if(array[x + 1] !== undefined){
        //swap if array [x] is greater than array[x + 1]
        if(array[x] > array[x + 1]) {
          let temp = array[x + 1];
          array[x + 1] = array[x];
          array[x] = temp;
        }
      }
    }
    sortedPointer += 1;
  }
  return array;
}

let myArray = [6, 5, 3, 1, 8, 7, 2, 4];

console.log(bubbleSort(myArray))

module.exports = bubbleSort;
