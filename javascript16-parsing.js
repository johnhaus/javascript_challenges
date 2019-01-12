// parse srtring and convert to integer

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("0581"));


// parsing a string to return an integer
// radix (2 in this case) can be between 2 and 36
// here str is converted to binary (base 2)
function convertInteger(str) {
  return parseInt(str, 2);
}

console.log(convertInteger("word"));
console.log(convertInteger("11"));
console.log(convertInteger("10011"));
console.log(convertInteger("111001"));
