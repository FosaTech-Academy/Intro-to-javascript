const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
];
const shoppingList = null;

console.log(shoppingCart);

let indexOfEgg = shoppingCart.indexOf("Eggs");
shoppingCart[indexOfEgg] = "Indomie";
console.log(shoppingCart);

shoppingCart.includes("Indomie")
  ? console.log("Indomie is in my cart")
  : shoppingCart.includes("Eggs")
    ? console.log("Eggs still remain in my cart")
    : console.log("Indomie and eggs are not in my cart");

const isArrayList = Array.isArray(shoppingList);
isArrayList
  ? shoppingList.includes("indomie")
    ? console.log("indomie in shopping list")
    : console.log("indomie not in shopping list")
  : console.log("shopping list is not an array");

shoppingCart.shift();

const ages = [19, 22, 19, 23, 20, 25, 26, 24, 25, 29, 20];
const sortedAges = [...ages];
sortedAges.sort();

let min = Math.min(...sortedAges);
let max = Math.max(...sortedAges);

console.log(`The minimum age is ${min} and the maximum age is ${max}`);

// array list is odd : median = myArray[Math.floor(array.length / 2)]
// [1, 2, 3, 4, 5, 6, 7] => 7
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => 15

// array list is even : median =
// indexOfMedian = array.length / 2
// medianValue1 = myArray[indexOfMedian]
// medianValue2 = myArray[indexOfMedian - 1]
// medianValue = medianValue1 + medianValue2 / 2
// [1, 2, 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let middle = sortedAges.length / 2;
const median =
  sortedAges.length % 2
    ? sortedAges[Math.floor(middle)]
    : sortedAges[middle - 1] + sortedAges[middle] / 2;

console.log("median value is ", median);

let sum = 0;
for (const age of sortedAges) {
  sum += age;
}
const avg = sum / sortedAges.length;
console.log("average value is ", avg);
