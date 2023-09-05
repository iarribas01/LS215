function substrings(string) {
  // let result = [];

  return string.split('').map((char, i) => {
    let substr = string.slice(i);

    return leadingSubstrings(substr);
  });


  // for (let i = 0; i < string.length; i += 1) {
  //   let substr = string.slice(i);
  //   result.push(...leadingSubstrings(substr));
  // }

  // return result;
}

function leadingSubstrings(string) {
  return string.split('').map((current, index) => {
    return string.slice(0, index) + current;
  })
}

console.log(substrings('abcde'));