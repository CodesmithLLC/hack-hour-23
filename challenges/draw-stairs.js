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
    let spaces;
    let asterisks;
    let currentString;

    //loop through each line
    for(let x = 1; x <= n; x++){
        currentString = '';
        spaces = n - x;
        asterisks = x
        //create the necessary spaces for each line and add to currentString;
        for(let y = 0; y < spaces; y ++){
            currentString += ' ';
        }
        
        //create the necessary asterisks for each line and add to currentString;
        for(let z = 0; z < asterisks; z++){
            currentString += '*';
        }
        console.log(currentString);
    }
}


module.exports = drawStairs;
