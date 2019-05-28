// generating random numbers in js

// generate random number > 0 and < 1 (decimal)
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());



// multiply random decimal number by 20 then
// round random number down with Math.floor
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);


function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


// get random number within a specified range of numbers
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));


function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 10));
