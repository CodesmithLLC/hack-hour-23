/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   //calculate mean vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
     let sum = array.reduce((a, b)=>{return a+b}); //Find the sum of every item in array
     let mean = sum/array.length;                  //Divide the sum by the number of items
   //calculate mode vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
     let quantities = {} //Each number and how often it shows up in the array
     for(let i of array){
       quantities[i] ?  quantities[i]++ : quantities[i] = 1;
             //If there is already an entry for this number, increment the frequency recorded
             //Otherwise, make an entry for that number and set it to 1
     }

     let mode = Object.keys(quantities)[0];

     for(let i in quantities){
       if(quantities[i] > quantities[mode]){
         mode = i;
       }
     }
   //compare mode and mean vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
   console.log(`mode: ${mode}`);
   console.log(`mean: ${mean}`);
   return Number(mode) == Number(mean);

 }

module.exports = modemean;
