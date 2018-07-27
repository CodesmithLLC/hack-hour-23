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

function drawStairs(n) {
  //create output string
  let output = '';
  //for loop while index is less than or equal to the value passed in
  for (var i = 1; i <= n; i++) {
    if(i === n) {
      output += ' '.repeat(n - i) + "*".repeat(i);
    } else {
      output += ' '.repeat(n - i) + "*".repeat(i) + '\n';
    }
  }
   console.log(output);
}


module.exports = drawStairs;
