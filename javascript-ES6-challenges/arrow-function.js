// Arrow functions examples

// Old way
var studentList = function(students) {
  console.log(students);
};

studentList(['Joe', 'Cindy', 'Jeanne']);

// New way with arrow functions
var studentList = (students) => console.log(students);

studentList(['Joe', 'Cindy', 'Jeanne']);

// With ONLY ONE argument can skip the parenthesis
var studentList = students => console.log(students);

studentList(['Joe', 'Cindy', 'Jeanne']);
