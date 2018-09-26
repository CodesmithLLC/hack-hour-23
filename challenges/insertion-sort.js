// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  //instantiate a array containing the first ele of input arr
  const result = [array[0]];
  //loop through input array
  for (let i = 0; i < array.length; i += 1) {
    //loop through result array, checking
    console.log('we in outer', i)
    for (let j = 0; j < result.length; j += 1) {
      // console.log('we in inner', j)
      if (j + 1 === result.length) result.push(array[i]);
      //if current array ele is less/= current result ele, put array ele to front of result array
      if (array[i] <= result[j]) result.splice(j, 0, array[i]) 
    }
  }
  return result;
}
console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
module.exports = insertionSort;