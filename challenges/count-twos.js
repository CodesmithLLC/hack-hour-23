// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 
// 
// console.log(countTwos(1));  //-> 0
// console.log(countTwos(3));  //-> 1
// console.log(countTwos(13));  //-> 2
//console.log(countTwos(1000));  //-> 300
console.log(countTwos(11420));  //-> 4483

//currently n^2 time
function countTwos(num, count = 0) {
  // let count = 0;
  // for (let i = 0; i <= num; i++) {
  //   count += checkNum(i);
  // }
  // return count;
  // if (num === 0) return count;
  // let arr = JSON.stringify(num).split('');
  // for (let i = 0; i < arr.length; i += 1) {
  //   if ()
  // }
}

function checkNum(num) {
  let arr = JSON.stringify(num).split('');
  let counter = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === '2') counter++;
  }
  return counter;
}


module.exports = countTwos;
