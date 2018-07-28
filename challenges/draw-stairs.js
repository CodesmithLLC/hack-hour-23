/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {

for(let i = 1; i<=n; i++){
    let step = "";
    for(let j = n-i; j>=0; j--){
      step += " ";
    }
    for(let k = 0; k<i; k++){
      step += "*"
    }
    console.log(step);
  }


module.exports = drawStairs;
