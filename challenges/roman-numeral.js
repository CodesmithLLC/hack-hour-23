/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let roman = ''; // initialize an empty string to collect roman numerals
    let i; // variable used to reference position in our 'key'
    
    let key = {       // Key will be used to reference Roman Numerals at different values of 'n'
        "M" : 1000,
        "CM": 900,
        "D" : 500,
        "CD": 400,
        "C" : 100,
        "XC": 90,
        "L" : 50,
        "XL": 40,
        "X" : 10,
        'IX': 9,
        'V' : 5,
        'IV': 4,
        'I' : 1,
    }
    for (let i in key) { // for each roman numeral in the key...
        while (n >= key[i]) { // while the given number 'n' is greater than or equal to the number at that position in the key...
            roman += i // add the key to our variable 'roman'...
            n -= key[i] // and subtract the number at that position from our given number... repeat the loop.
        }
    }
    return roman;
}

console.log(romanNumeral(700))













module.exports = romanNumeral;

