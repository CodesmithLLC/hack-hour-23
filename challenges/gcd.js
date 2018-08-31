/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    //define the larger of the two values
    let num1 = Math.max(a,b)
    let num2 = Math.min(a,b)

    //Set a temporary GCD
    let prevGCD = 1

    //Helper function will run until the two numbers it is fed reach modulo 0, 
    //and recursively call itself until that case is reached

    function newGCD(x,y){
    if (num1%num2 === 0) {
        prevGCD = num2;
        return;
    };
    let r = num1 % num2;
    let q = Math.floor(num1/num2)

    num1 = num2
    num2 = r
    newGCD(num1,num2)
    }

    newGCD(num1,num2)
    return prevGCD
};

module.exports = gcd;