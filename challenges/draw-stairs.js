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

function drawStairs(n, count = 1) {
    console.log(" ".repeat(n-count) + "*".repeat(count))
    count++
    if (count-1 < n) drawStairs(n, count); 
}

drawStairs(40);
module.exports = drawStairs;
