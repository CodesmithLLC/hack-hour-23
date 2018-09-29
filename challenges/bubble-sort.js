// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  
  if (!Array.isArray(array) || array.length <= 1) return array;

  for (let j = 1; j <= array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort());
console.log(bubbleSort([]));
console.log(bubbleSort([1]));
console.log(bubbleSort([2,3,4,1]));
console.log(bubbleSort([4,3,2,1]));

module.exports = bubbleSort;
