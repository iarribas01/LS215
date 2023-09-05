function substrings(string) {
  let result = [];

  string.split('').forEach((char, i) => {
    let substr = string.slice(i);
    result.push(...leadingSubstrings(substr));
  });

  return result;
}

function leadingSubstrings(string) {
  return string.split('').map((current, index) => {
    return string.slice(0, index) + current;
  })
}

function isPalindromic(string) {
  if (string.length === 1) return false;

  let left = string.slice(0, string.length / 2);
  let right;

  if (string.length % 2 === 1) {
    right = string.slice((string.length / 2) + 1);
  } else {
    right = string.slice(string.length / 2);
  }

  return left === right.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindromic);
}

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]