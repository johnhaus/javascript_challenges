// Some examples with sets

var books = new Set();
books.add('Pride and Prejudice');
books.add('War and Peace')
     .add('Oliver Twist');

console.log(books);
console.log('how many books?', books.size);
console.log('has Oliver Twist?', books.has('Oliver Twist'));
books.delete('Oliver Twist');
console.log('Still has Oliver Twist?', books.has('Oliver Twist'));

var data = [3, 8, 3, 5, 5, 1, 8, 6, 9, 7, 3, 8, 2, 1, 5];
var set = new Set(data);
console.log('data.length', data.length);
console.log('set.size', set.size);
