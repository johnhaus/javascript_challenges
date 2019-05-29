// Some destructureing

//With arrays- use commas to skip over unwanted ones
var [first,,, fourth,] = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'];
console.log(first);
console.log(fourth);

// method 1
var sandwich = {
  title: 'Reuben',
  price: 7,
  description: 'a sandwich',
  ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
};

console.log(sandwich.title);
console.log(sandwich.price);

// method 2
var {title, price} = {
  title: 'Reuben',
  price: 7,
  description: 'a sandwich',
  ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
};

console.log(title);
console.log(price);


var vacation = {
  destination: 'Chile',
  travelers: 2,
  activity: 'skiing',
  cost: 4000
};

function vacationMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`
}

console.log(vacationMarketing(vacation));
