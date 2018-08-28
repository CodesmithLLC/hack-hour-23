/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// function permPalin(str, strArray = str.split('')) {
  
//   //count the number of permutations scrambled through
//   if (strArray.length <= 1) return true;
//   if (count === factorial(str.length) && front !== back) return false
  
//   let front = strArray.shift();
//   let back = strArray.pop();
//   let count = 1;

//   if (front === back) {
//     return permPalin(str, strArray);
//   } else {
//     str = scrambler(str);
//     count++;
//     return permPalin(str, strArray = str.split(''));
//   }
// }

// function scrambler(str) {
//   //closure to keep track of count?>
//   // let scramCount = 1;
//   let strArr = str.split('');
  let permArr = [];
  let usedChars = [];

  function permute(str) {
    console.log(str);
    let strArr = str.split('');
    var i, ch;
    // scramCount++;
    for (i = 0; i < strArr.length; i++) {
      ch = strArr.splice(i, 1)[0];
      usedChars.push(ch);
      if (strArr.length == 0) {
        permArr.push(usedChars.slice());
      }
      //permute(strArr);
      strArr.splice(i, 0, ch);
      usedChars.pop();
    }
    console.log(permArr);
    return permArr
  };
// }

function factorial(num, product = 1) {
  return (num === 0) ? product : factorial(num - 1, product * num);
}

console.log(permute('abab'));
module.exports = permPalin;