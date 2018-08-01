/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(base === 0) return 1;

    if(power !== 1){
        return base*pow(base, power-1);
    }else{
        return base;
    }
}
// console.log(pow(2,5));
module.exports = pow;
