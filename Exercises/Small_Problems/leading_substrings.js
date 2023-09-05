// function leadingSubstrings(string) {
//   let result = [];

//   console.log(string.split('').reduce((arr, char) => {
//     let substr = (arr[arr.length - 1] || '') + char;
//     arr.push(substr);
//     return arr;
    
//   }, []));
// }

function leadingSubstrings(string) {
  return string.split('').map((current, index) => {
    return string.slice(0, index) + current;
  })
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]