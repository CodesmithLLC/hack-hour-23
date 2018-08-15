/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if(base === 0){
    return 0;
  }else if(power === 0){
    return 1;
  }
  else if(power === 1){
    return base;
  }else{
    return base * pow(base, power - 1);
  }
}

// console.log(pow(4, 5));
// console.log(pow(0,0));


module.exports = pow;
