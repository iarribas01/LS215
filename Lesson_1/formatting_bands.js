let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

/*
    "fix" the bands
      - set country to canada --- map
      - capitalize all band names --- map
      - remove dots from band names --- map

      all transform functions, we can abstract
      iterating through all of a certain property
      to a function and then provide a callback
      for specific changes
  */

function processBands(data) {
  editAll(data, 'country', () => 'Canada');
  editAll(data, 'name', capitalizeWords);
  editAll(data, 'name', removeDots);
  
}

function capitalizeWords(string) {
  return string.split(' ').map(capitalize).join(' ');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function removeDots(string) {
  return string.replace(/\./g, '');
}


function editAll(arr, property, callback) {
  arr.forEach((obj) => {
    obj[property] = callback(obj[property]);
  });
}



processBands(bands);
console.log(bands);
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]