// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  if (array.length < 1) return [];

  let remaining = array.length;

  for (let i = 0; i < array.length; i++) {
    let leadIdx = 1;
    let followIdx = 0;
    while (leadIdx < remaining) {
      let lead = array[leadIdx];
      let follow = array[followIdx];
      let temp;
      if (lead < follow) {
        temp = array[leadIdx];
        array[leadIdx] = array[followIdx];
        array[followIdx] = temp;
      }
      leadIdx++;
      followIdx++;
    }
    remaining--;
  }

  return array;
}

module.exports = bubbleSort;
