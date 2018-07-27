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

// okay, so we have in the above example, n rows and n columns.
//we start with 1 star, and n-1 spaces. and end with n stars in the last row.
// after the inital row, we add 1 star to it and remove one space.


//approach:
//initialize the first row with spaces = n-1 and stars = 1;
//then loop up to i<n, and with each iteration we ++ stars and -- spaces, creating and concatting strings for both.




function drawStairs(n) {
  let numSpaces = n-1;
  let numStars = 1;



  function createNumSpaces(num){
    let result = '';
    for(let i = 0; i<num; i++){
      result += ' ';
    }
    return result;
  }
  
  function createNumStars(num){
    let result = '';
    for(let i = 0; i<num; i++){
      result += '*';
    }
    return result;
  }
  
  function createRow(spaces, stars){
    return createNumSpaces(spaces) + createNumStars(stars);
  }




  for (let i = 0; i < n; i++){
    console.log(createRow(numSpaces,numStars));
    numSpaces--;
    numStars++;
  }
}

module.exports = drawStairs;
