// arrow functions

// This one does the same as function below it
var magic = function() {
  "use strict";
  return new Date();
};

// shorter way to write above function
const magic = () => new Date()


// arrow function with parameters
const myConcat = (arr1, arr2) => arr1 + arr2;

console.log(myConcat([1, 2], [3, 4, 5]));


// return square of positive integers
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num,2) );
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
