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
    let spaces = " "
    let stars = '*';
    var myStairs = ''
    for (let i = n-1; i >= 1; i--) {
        console.log(spaces.repeat((n-(n-i))).concat(stars.repeat(n-i)))
    }
}


module.exports = drawStairs;
