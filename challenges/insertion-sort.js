// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const output = [array[0]];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= output[output.length - 1]) {
      output.push(array[i])
    } else if (array[i] <= output[0]) {
      output.unshift(array[i])
    } else {
      for (let j = 1; j < output.length - 1; j++) {
        if (array[i] >= output[j] && array[i] <= output[j + 1]){
          output.splice(j, 0, array[i])
        }
      }
    }
  }
  return output
}

module.exports = insertionSort;