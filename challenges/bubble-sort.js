// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sortLength = array.length - 1
  array.forEach(ele => {
    for (let i = 0; i < sortLength; i += 1) {
      if (array[i] > array[i+1]) {
        const temp = array[i];
        array[i] = array[i+1]
        array[i+1] = temp; 
      }
    }
  })
  return array; 
}

const array = [34, 2, 10, 4, 60, 1, 10]
console.log(bubbleSort(array))

module.exports = bubbleSort;
