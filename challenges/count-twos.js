// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

console.log(countTwos(1));     //-> 0
console.log(countTwos(3));     //-> 1
console.log(countTwos(13));    // -> 2
console.log(countTwos(1000));  // -> 300
console.log(countTwos(11420)); //  -> 4483

// brute force
// function countTwos(num) {
//   let count = 0;
//   for (let i = 2; i <= num; i += 1){
//     let digits = String(i).split('');
//     digits.forEach(digit => {
//       if (digit.includes('2')) count +=1
//     })
//   }
//   return count; 
// }

// hacky solution
function countTwos(num){
  // create digit array
  const digits = num.toString().split('').reverse();
  
  return digits.reduce((count, strDigit, idx, arr) => {
    // turn string into number
    const digit = Number(strDigit);
    // case for first digit
    if (idx === 0) {
      if (digit >=2) count += 1;
    } else {
      // use formula to add to count based on digit and index
      count += digit * idx * Math.pow(10, idx - 1);
      // add 10 to the index power for digits > 2
      if (digit > 2) {
        count += Math.pow(10, idx);
      } else if (digit === 2){
        // for digits === 2, add the total of all previous digits to the count
        count += Number(arr.slice(0, idx).join('')) + 1
      }
    }
    // return updated count
    return count;
    // include initial value of 0
  }, 0); 
}

module.exports = countTwos;
