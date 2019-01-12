// a few ternarys in js

function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, 2));
console.log(checkEqual(-5, 2));
console.log(checkEqual(1, -1));
console.log(checkEqual(2, 2));


// chaining ternarys together
function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-8));
