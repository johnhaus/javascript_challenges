// loops

// while loop
var myArray1 = [];

var number = 0
while(number < 5) {
  myArray1.push(number);
  number++;
}

console.log(myArray1);


// for loop
var myArray2 = [];

for (var i = 1; i < 6; i++) {
    myArray2.push(i);
}

console.log(myArray2);


// for loop with odd numbers
var myArray3 = [];

for (var i = 1; i < 10; i +=2) {
  myArray3.push(i);
}

console.log(myArray3);


// counting down with for loop
var myArray4 = [];

for (var i = 9; i > 0; i -=2 ) {
  myArray4.push(i);
}

console.log(myArray4);


// iterate over contents of array
var myArr5 = [ 2, 3, 4, 5, 6];

var total = 0;

for (var i = 0; i < myArr5.length; i++) {
  total += myArr5[i];
}

console.log(total);
