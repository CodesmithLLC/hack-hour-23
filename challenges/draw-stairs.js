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
    // base case
    // staircase must climb up from left to right
    // last line should only have *, no leading/trailing spaces
    // initially 5 spaces with the last being the *
    // 4 spaces with **
    // 3 spaces with ***

    // if n === 3
    // 2 spaces   * -> n-1 2  n - (n-1) prints
    // 1 space   ** -> n-1 1
    // 0 spaces *** -> n-1 0
    let str = '';

    if(n === 0){
        for(let i = 0; i < n; i++){
            str += '*';
        }
        console.log(str);  
    }else{
        // for spaces?
        for(let i = 0; i < (n - 1); i++){
            str += ' ';
        }
        // for *
        for(let i = 0; i < (n - (n - 1)); i++){
            str += '*';
        }
        console.log(str);
        drawStairs(n - 1);
    }
    // let count = 0;
    // while(count > n){
    //     newStr += 
    // }
}

drawStairs(3);


module.exports = drawStairs;
