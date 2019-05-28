// Some examples with map

var course = new Map();
course.set('react', {description: 'ui'});
course.set('jest', {description: 'testing'});

console.log(course);
console.log(course.react);
console.log(course.get('react'));

var details = new Map([
  [new Date(), 'today'],
  ['items', [1, 2]]
]);

console.log(details.size);

details.forEach(function(item) {
  console.log(item);
});
