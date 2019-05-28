// Spread operator allows each item in cats and dogs arrays to print in
// the animals array.

let cats = ['Tabby', 'Siamese', 'Persian'];
let dogs = ['Retriver', 'Pug', 'Schnauzer'];

let animals = ['Whale', 'Giraffe', ...cats, 'Snake', ...dogs, 'Coyote'];
console.log(animals);
