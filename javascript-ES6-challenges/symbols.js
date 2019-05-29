// using generator
// uncomment code below and comment out current code to see
// this example- only 1 at a time works

// const id = Symbol();
// const courseInfo = {
//   title: 'ES6',
//   topics: ['babel', 'syntax', 'functions', 'classes']
// };

// courseInfo[id] = 343;
// console.log(courseInfo);
// console.log(courseInfo[id]);


const id = Symbol();
const courseInfo = {
  title: 'ES6',
  topics: ['babel', 'syntax', 'functions', 'classes'],
  id: 'js-course' // won't override symbol id
};

courseInfo[id] = 343;
console.log(courseInfo);
