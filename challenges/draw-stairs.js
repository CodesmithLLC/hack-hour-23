/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

// input: param representing a number.
// output: log the output of staircase via two for loops.
// tools: for loops -> one to create an array with the "n" spaces.
// loop thru with 2nd loop and replace 

function drawStairs(n) {
  const stairs = [];
  for (let i = 1; n >= i; i++) {
    stairs.push(' ');
  }
  for (let i = n - 1; i >= 0; i--) { 
  // change each previous position to an asterisk and log the output once the loop is finished.
  stairs[i] = "*";
  console.log(stairs.join(''));
  }
}

drawStairs(4);

module.exports = drawStairs;
