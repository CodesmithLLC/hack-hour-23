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
    let romanArray = [
        [1, 'I'], 
        [4, 'IV'], 
        [5, 'V'], 
        [9, 'IX'], 
        [10, 'X'], 
        [40, 'XL'], 
        [50, 'L'], 
        [90, 'XC'], 
        [100, 'C'], 
        [400, 'CD'], 
        [500, 'D'], 
        [900, 'CM'], 
        [1000, 'M']
    ]
    let i = 0;
    let ret = '';
    while (n > romanArray[i][0]){
        i++;
    }
    return ret + romanArray[i][1] + romanNumeral(n - romanArray[i][0]);
}

//WHY DOESNT THIS WORK???
console.log(romanNumeral(5));

    // if (n > 1000) {
    //     //ret + 'M';
    //     //recursively take number - 1000;
    //     //romanNumeral(n - 1000);
    // }
    // if (n > 900) {
    // }

module.exports = romanNumeral;
