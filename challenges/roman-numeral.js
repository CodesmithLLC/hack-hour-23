function romanNumeral(n) {
    //if first digit is 1 less than 5, use current round's letter
    //before next round letter
    //if first digit is 1 less than 10, use current round's letter 
    //before next round letter
    //break down the number, but keep track of adding up to number
    let numObj = {
      1: 'I', 
      4: 'IV',
      5: 'V', 
      9: 'IX',
      10: 'X', 
      40: 'XL',
      50: 'L', 
      90: 'XC',
      100: 'C', 
      400: 'CD',
      500: 'D', 
      900: 'CM',
      1000: 'M'
    };
    let numArr = JSON.stringify(n).split('');
  
    let keys = Object.keys(numObj);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {
      current = keys[i];
      previous = keys[i - 1];
      base = keys[i - 2];
      next = keys[i + 1];
      let numIndexArr = JSON.stringify(keys[i]).split('');
      if (n < keys[i]) {
         
        if (parseInt(numIndexArr[0]) === 5) {
          let letterA = numObj[previous];
          let letterB = numObj[current]; 
          console.log(letterB);
          numArr.shift();
          let updatedNum = parseInt(numArr.join(''));
          return letterA + letterB + romanNumeral(updatedNum);
        }
      }
      console.log(numObj[current]);
    }
    //return numArr;
  
  }
romanNumeral(6);
module.exports = romanNumeral;
