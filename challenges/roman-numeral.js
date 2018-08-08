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
  // can obtain number of digits using n.toString().length
  // recursion??
  // use I for every first - 3 numbers?
  // for 4th number always use IV
  // maybe have a switch case that handles based on the number of digits
  // if length is 1 then check if it's >= 1 and < 4, if it is parse that digit to loop through to print I
    // if length is 1, then chekc if ithe digit is 4, if it is, print IV
    // if lenght is 1, then check if the digit is 5, if it is print V
    // if lenght is 1, then check if digit is > 5 and < 9, if it is, print V, then subtract the digit by 5 to print I
    // if length is 1, and it is 9, print IX
  // if length is 2, and the first digit is 1 to 3, print X digit times
    // then check for the 2nd digit
  return romanHelper(n, '');
}

function romanHelper(n, str){
  let tempNum;
  
  if(n === 0){
    return str;
  }
  
  if(n.toString().length === 1){
    if(n >= 1 && n < 4){
      for(let i = 0; i < n; i++){
        str += 'I';
      }
    }else if(n === 4){
      str += 'IV';
    }else if(n === 5){
      str += 'V';
    }else if(n > 5 && n < 9){
      str += 'V';
      for(let i = 0; i < n - 5; i++){
        str += 'I';
      }
    }else if(n === 9){
      str += 'IX';
    }
    tempNum = 0;
  }else if(n.toString().length === 2){
    tempNum = '' + n;
    let num = tempNum.charAt(0);
    if(num >= 1 && num < 4){
      for(let i = 0; i < num; i++){
        str += 'X';
      }
    }else if(num === 4){
      str += 'XL'
    }else if(num === 5){
      str += 'L';
    }else if(num > 5 && num < 9){
      str += 'L';
      for(let i = 0; i < num - 5; i++){
        str += 'X';
      }
    }else if(num === 9){
      str += 'XC';
    }
    tempNum = parseInt(tempNum.substring(1));
  }else if(n.toString().length === 3){
    tempNum = '' + n;
    let num = tempNum.charAt(0);
    if(num >= 1 && num < 4){
      for(let i = 0; i < num; i++){
        str += 'C';
      }
    }else if(num === 4){
      str += 'CD'
    }else if(num === 5){
      str += 'D';
    }else if(num > 5 && num < 9){
      str += 'D';
      for(let i = 0; i < num - 5; i++){
        str += 'C';
      }
    }else if(num === 9){
      str += 'CM';
    }
    tempNum = parseInt(tempNum.substring(1));
  }else if(n.toString().length === 4){
    tempNum = '' + n;
    let num = tempNum.charAt(0);
    str += 'M';
    tempNum = parseInt(tempNum.substring(1));
  }

  return romanHelper(tempNum, str);
}

console.log(romanNumeral(129));

module.exports = romanNumeral;
