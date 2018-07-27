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

function drawStairs(n, nHigh = n) {
  if(1 >= n && n <= 100){
    if(n > 0){
      drawStairs(n-1, nHigh);
      console.log(" ".repeat(nHigh - n) + "*".repeat(n));
    }
  }
}


module.exports = drawStairs;
