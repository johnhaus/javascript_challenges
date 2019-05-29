// Generator funciton- pauses the function

function* director() {
  yield 'Three';
  yield 'Two';
  yield 'One';
  yield 'Action';
}

var action = director();

console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());

// show just the values
function* director() {
  yield 'Three';
  yield 'Two';
  yield 'One';
  yield 'Action';
}

var action = director();

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);


function* eachItem(arr) {
  for(var i=0; i< arr.length; i++) {
    yield arr[i];
  }
}

var letters = eachItem(['a', 'b', 'c', 'b', 'e', 'f', 'g']);

var abcs = setInterval(function() {
  var letter = letters.next();
  if(letter.done) {
    clearInterval(abcs);
    console.log('All done');
  } else {
    console.log(letter.value);
  }
},
  500);
