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

function romanNumeral(n, output = []) {
    // edge case - make sure number being passed in is a positive integer.
    if (n < 0 || typeof n !== 'number') return 'invalid integer';
    // base-case that can be removed, prevents last number from being returned.
    if (n === 1) return output.join('')
    // base-case - return as string     
    if (n === 0) return output.join('') 

    // create an object storing the values of the basic conversions. 
    const romanNumbersConversionObject = {
        1: 'I',
        5: 'V',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }
    // rule: can't have the same number is being shown 3x
    // if you have 3 of the same character, must pop off the last two and attach the next key/value
    
    // capture current key
    let currKey;

    // get the keys, need for checking > / < values
    let keysOfConversionObject = Object.keys(romanNumbersConversionObject);
    // iterate through the keys, look for the value of the roman numeral 
    for (let i = 0; i < keysOfConversionObject.length; i++) {
        if (n === keysOfConversionObject[i]) {
            output.push(romanNumbersConversionObject[keysOfConversionObject[i]]);
            currKey = keysOfConversionObject[i];
        }
        if (n < keysOfConversionObject[i] && n > keysOfConversionObject[i - 1]) {
            output.push(romanNumbersConversionObject[keysOfConversionObject[i -1]]);
            currKey = keysOfConversionObject[i - 1];
        }
    }
    // currKey is a string, make sure to convert
    // use recursion to go through and pass in a new number each time 
    return romanNumeral(n - Number(currKey), output);

}

module.exports = romanNumeral;
