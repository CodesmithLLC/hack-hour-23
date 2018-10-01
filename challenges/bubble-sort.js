// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let i = array.length
  while (i > 1) {
    for (let j = 0; j < i - 1; j += 1) {
      const temp = array[j]
      if (array[j + 1] < array [j]) {
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
    i -= 1
  }
  return array
}

module.exports = bubbleSort;
