/* Given a positive integer, return it as a romanString in Roman Numeral form.
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
    let romanStr = ''; 

    function numberToRoman(n) {
        if (n >= 1000) {
            romanStr += 'M'
            n -= 1000;
            return numberToRoman(n);
            
        } else if (n < 1000 && n >= 900) {
            romanStr += 'CM';
            n -= 900;
            return numberToRoman(n);
    
        } else if (n < 900 && n >= 500) {
            romanStr += 'D'
            n -= 500;
            return numberToRoman(n);
    
        } else if (n < 500 && n >= 400) {
            romanStr += 'CD'
            n -= 400;
            return numberToRoman(n)
            
        } else if (n < 400 && n >= 100) {
            romanStr += 'C'
            n -= 100
            return numberToRoman(n)
    
        } else if (n < 100 && n >= 90) {
            romanStr += 'XC'
            n -= 90
            return numberToRoman(n)
    
        } else if (n < 90 && n >= 50) {
            romanStr += 'L'
            n -= 50
            return numberToRoman(n)
    
        } else if (n < 50 && n >= 40) {
            romanStr += 'XL'
            n -= 40
            return numberToRoman(n)
    
        } else if (n < 40 && n >= 10) {
            romanStr += 'X'
            n -= 10
            return numberToRoman(n)
    
        } else if (n < 10 && n >= 9) {
            romanStr += 'IX'
            n-= 9
            return numberToRoman(n)
    
        } else if (n < 9 && n >= 5) {
            romanStr += 'V'
            n -= 5;
            return numberToRoman(n);
    
        } else if (n < 5 && n >= 4) {
            romanStr += 'IV'
            n-= 4
            return numberToRoman(n)
    
        } else if (n < 4 && n >= 1) {
            romanStr += 'I'
            n -= 1
            return numberToRoman(n)
        } else {
            return
        }
    }
    numberToRoman(n)

   
    return romanStr
     
    

}

console.log(romanNumeral(5))


module.exports = romanNumeral;
