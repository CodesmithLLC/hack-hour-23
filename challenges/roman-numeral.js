function romanNumeral(n) {
    //if first digit is 1 less than 5, use current round's letter
    //before next round letter
    //if first digit is 1 less than 10, use current round's letter 
    //before next round letter
    //break down the number, but keep track of adding up to number
    //1: I, 5: V, 10: X, 50: L, 100: C, 
    let numObj = {
      1: 'I', 
    5: 'V', 
    10: 'X', 
    50: 'L', 
    100: 'C', 
    500: 'D', 
    1000:'M'};
    let numArr = JSON.stringify(n).split('');
  
    // for (let numIndex in numObj) {
    //   //console.log(numIndex);
    
    //   //if n is 10% or less than 10% less than numIndex,
    //   //concat previous multiple of 10 with next numIndex
    //   if (n < numIndex && parseInt(numArr[0]) === parseInt(numIndexArr[0]) - 1) {
        
    //   }
    // }
    let keys = Object.keys(numObj);
    for (var i = 0; i < keys.length; i++) {
      current = keys[i];
      previous = keys[i - 1];
      base = keys[i - 2];
      next = keys[i + 1];
      let numIndexArr = JSON.stringify(keys[i]).split('');
      if (n < keys[i] && parseInt(numArr[0]) === parseInt(numIndexArr[0]) - 1) {
        //if number is less than current num index & first digit of num is 1 less
        //than current numindex's first digit, 
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
    console.log(keys);
    //return numArr;
  
  }

module.exports = romanNumeral;
