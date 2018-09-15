/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    const aNumberStore = [];
    let finalNumber;

    if (a % b === 0) return b;
    if (b % a === 0) return a;
    

    for (let i = 0; i < a; i += 1) {
        if (a % i === 0) aNumberStore.push(i)
    };

    for (let i = 0; i < aNumberStore.length; i += 1) {
        if (b % aNumberStore[i] === 0) finalNumber = aNumberStore[i]
    };

    return finalNumber;
}

console.log(gcd(150, 25))
module.exports = gcd;