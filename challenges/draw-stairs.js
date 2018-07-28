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
	if (n > 100 || n < 1)
		return 'invalid number';
	// let ret = new Array(n); // initialize array
	// let star = n - 1; // position to aid in creation of array
	// while (ret[0] != '*'){
	// 	for (let i = 0; i < ret.length; i++) {
	// 		if (i < star) { // star = 5, i = 0; star = 5, i = 1 ... // star = 4, i = 0; star = 4, i = 1 ... //
	// 			ret.push(' ');
	// 		} else {
	// 			ret.push('*'); //
	// 		}
	// // 	}
	// 	console.log(ret);
	// 	star--;
	// }
	spaces = n - 1;
	for (let i = 0; i < n; i++) {
		console.log(' '.repeat(spaces + 1 - i) + '*'.repeat(i));
	}
}


function drawStairs(n) {

}
//build array
//while (condition) console.log array;


[' ', ' ', ' ', ' ', ' ',  *]
[' ', ' ', ' ', ' ',  * ,  *]
[' ', ' ', ' ', *  ,  * ,  *]
[' ', ' ',  * , *  ,  * ,  *]
[' ', *  ,  * , *  ,  * ,  *]
[ * , *  ,  * , *  ,  * ,  *] 

module.exports = drawStairs;
