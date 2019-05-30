// using fetch function

// uncomment to use- comment out code below to do so
// fetch('http://api.open-notify.org/astros.json')
//   .then(res => res.json())
//   .then(console.log);

// another way to do it
// const getPeopleInSpace = () =>
//   fetch('http://api.open-notify.org/astros.json')
//     .then(res => res.json());

// getPeopleInSpace()
//   .then(console.log);

// returns names only
const getPeopleInSpace = () =>
  fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json());

const spaceNames = () =>
  getPeopleInSpace()
    .then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(', '));

spaceNames()
  .then(console.log);
