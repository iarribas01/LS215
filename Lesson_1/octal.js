// 🍕🍕🍕 someone's hungry

function octalToDecimal(numberString) {
  /*
  split the string to get the digits
  starting with the rightmost digit,
  transform each element to calculated
    value in base 8 - multiply (digit) * base-8 ^ place-value
  sum up these values to get base 8 -- reduce
   */
  let power = numberString.length - 1;
  return numberString.split('').map((digit) => {
    digit = parseInt(digit, 10);
    return digit * Math.pow(8, power--);
  }).reduce((accumulator, current) => accumulator + current);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9