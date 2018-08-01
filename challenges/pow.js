/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1
    if (power === 1) return base
    let answer = base * pow(base, --power)
    return answer; 
}

console.log(pow(3,4))

module.exports = pow;
