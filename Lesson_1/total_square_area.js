function totalSquareArea(rectangles) {
  let squares = rectangles.filter(dimensions => dimensions[0] === dimensions[1]);

  return totalArea(squares);
}

function totalArea(rectangles) {
  return rectangles.map((dimensions) => 
    dimensions[0] * dimensions[1]
  ).reduce((accumulator, current) => {
    return accumulator + current;
  });
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121
// filter out all the squares -- filter
// compute the areas of each rectangle -- map
// find the total of all of the areas -- reduce