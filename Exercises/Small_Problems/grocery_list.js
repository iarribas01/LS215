function buyFruit(arr) {
  let groceryList = [];

  arr.forEach(pair => {
    let fruit = pair[0];
    let quantity = pair[1];

    for (let i = 0; i < quantity; i += 1) {
      groceryList.push(fruit);
    }
  });

  return groceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]