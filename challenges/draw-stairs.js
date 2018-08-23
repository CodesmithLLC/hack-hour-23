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
    if (n < 0) return 'Invalid Input'
    const newArr = [];
    let stair = ''
    for (let i = 1; i < n + 1; i += 1) {
        newArr.push(stair)
        stair = ' '.repeat(n - i) + '*'.repeat(i)
    }
    newArr.forEach(function(ele){
        console.log(ele);
    })
}
drawStairs(6)




module.exports = drawStairs;
