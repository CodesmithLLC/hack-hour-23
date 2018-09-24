// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


// function countTwos(num) {
//   // guard cases
//   if (!num || typeof num !== 'number' || num === 0 || num === 1) return 0;
//   // count
//   let counter = 0;
//   // loop until the input num (inclusive), start from 1 
//   for (let i = 1; i <= num; i += 1) {
//     const switchIIntoArrayOfElements = i.toString().split('');
//     switchIIntoArrayOfElements.forEach(num => {
//       if (num === '2') counter += 1; 
//     });
//   }
//   return counter;
// }

// use recursion 
const countTwos = (num, count = 0) => {
  // guard cases
  if (!num || typeof num !== 'number' || num === 0) return count;

  // convert the num into a string, then to an array
  const switchNumIntoArrayOfElements = num.toString().split('');
  
  // iterate through the array
  switchNumIntoArrayOfElements.forEach(n => {
    if (n === '2') count += 1;
  });

  // decrement num for each invocation.
  return countTwos(num - 1, count)
}

module.exports = countTwos;
