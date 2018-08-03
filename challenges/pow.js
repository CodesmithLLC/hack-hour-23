<<<<<<< HEAD
function pow(base, power) {
    if(power == 0){return 1}
    else {
      if(power < 0){
        return pow(base, power+1) / base;
      } else if (power > 0){
        return pow(base, power-1) * base;

      }
    };
}
=======
/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

}

module.exports = pow;
>>>>>>> 2190d775e6d623e610760b846238c0683d13b860
