function multiplyAllPairs(arr1, arr2) {
  console.log(findAllPairs(arr1, arr2).map(calcProduct).sort());
}

function calcProduct(arr) {
  return arr[0] * arr[1];
}

// return all combinations of elements of two arrays
function findAllPairs(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr2.length; i += 1) {
    for (let j = 0; j < arr1.length; j += 1) {
      result.push([arr2[i], arr1[j]]);
    }
  }

  return result;
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// ( [
//     [2, 4],
//     [2, 3],
//     [2, 1],
//     [2, 2],

//     [4, 4], 
//     [4, 3],
  
  
// ] 
//   )