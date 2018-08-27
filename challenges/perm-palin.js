
//Given a string, determine if any of the permutations of that string is a palindrome
//Example:
 console.log(permPalin('abab')) //=> true
 console.log(permPalin('cbaba')) // => true
 console.log(permPalin('cbac')) //=> false
 console.log(permPalin('a')) //=> true


function permPalin(str) {
  if (typeof str !== 'string') return undefined
  if (str.length < 2) return true;

  let splitStr = str.split(''); 
  let noMatchCount = 0; //a palindrome can have 1 letter that does not match

  //remove all matching letters
  const strReducer = (str) => {
  console.log('count', noMatchCount)
  console.log('str', str)

    if (str.length < 2) return true;
    const removeFirst = str.slice(1)
    const matchLocation = removeFirst.indexOf(str[0]) + 1
    console.log(matchLocation)
    if (matchLocation !== -1){
      if (str.length === 2) return true; 
      let newStr = str.slice(1, matchLocation).concat(str.slice(matchLocation+1))
      // newStr = newStr.concat(str.slice(matchLocation))
      return strReducer(newStr)
    }
    else if (noMatchCount < 1) {
      console.log('in else if')
      noMatchCount++
      return strReducer(str.slice(1))
    }
    else return false; 
  }
  const splitStr2 = strReducer(splitStr)
  return splitStr2

 
}


module.exports = permPalin;