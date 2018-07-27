/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 c ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  if (1 <= n <= 100) {
    for ( let i = 1; i <= n; i++) {
      console.log(" ".repeat(n - i) + "*".repeat(i))
    }
  }
}

module.exports = drawStairs;
