// For-of loops

for (let letter of 'Javascript') {
  console.log(letter);
}

var topics = ['Javascript', 'Node', 'React'];

for (let topic of topics) {
  console.log(topic);
}

var topics = new Map();
topics.set('HTML', '/class/html');
topics.set('CSS', '/class/css');
topics.set('Javascript', '/class/javascript');
topics.set('Node', '/class/node');

for (let topic of topics) {
  console.log(topic);
}

for (let topic of topics.keys()) {
  console.log(topic, 'is the course name');
}

for (let topic of topics.values()) {
  console.log('The course description can be found at', topic);
}

for (let course of topics.entries()) {
  console.log(course);
}
