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
  let res = ""
  for (let i = n + 1, j = 1; i>=1; i--, j++) {
    res += (new Array(i).join(" ") + new Array(j).join("*") + (i === 1 ? "" : "\n")
  }
  console.log(res);
}


module.exports = drawStairs;
