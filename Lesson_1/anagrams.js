function anagram(word, list) {
  return list.filter((wordToCompare) => {
    return areAnagrams(word, wordToCompare);
  });
}

function areAnagrams(left, right) {
  left = left.split('').sort().join('');;
  right = right.split('').sort().join('');

  return left === right;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]