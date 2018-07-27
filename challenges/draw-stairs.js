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


//input: n parameter -> represents a number between 1 and 100.
//output: console.log of asterisks starting with 1 then to you input number.
//tools: for loop to iterate through number, recursion? base case?

function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
  	if (i <= 1 && i <= 100) {
  	  return console.log("*");
  	}
  }
}


module.exports = drawStairs;
