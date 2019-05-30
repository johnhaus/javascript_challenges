// Using promises

// uncomment functions to use one at a time- example 1
// const firstDelay = seconds => {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000)
//   });
// };

// console.log('zero seconds');
// firstDelay(1).then(() => console.log('one second'));
// firstDelay(3).then(() => console.log('three seconds'));

// example 2
// const secondDelay = seconds => {
//   return new Promise(resolve => {
//     setTimeout(
//       () => resolve(`${seconds} second Delay is up`),
//       seconds * 1000
//     );
//   });
// };

// console.log('zero seconds');
// secondDelay(2).then((msg) => console.log(msg));
// secondDelay(4).then((msg) => console.log(msg));

// example 3
// const thirdDelay = seconds => {
//   return new Promise(resolve => {
//     setTimeout(
//       () => resolve(`${seconds} second Delay is up`),
//       seconds * 1000
//     );
//   });
// };

// console.log('zero seconds');
// thirdDelay(2).then(msg => msg.toUpperCase())
//   .then(msg => `${msg}!!!`)
//   .then(msg => console.log(msg));

// example 4- function that breaks
const fourthDelay = seconds => {
  return new Promise((resolve, reject) => {
    if(typeof seconds !== 'number') {
      reject(new Error('Argument seconds must be a number'));
    }
    setTimeout(
      () => resolve(`${seconds} second Delay is up`),
      seconds * 1000
    );
  });
};

console.log('zero seconds');
fourthDelay('10 minutes').then(msg => msg.toUpperCase())
  .then(msg => `${msg}!!!`)
  .then(msg => console.log(msg));
fourthDelay(2).then(msg => msg.toUpperCase())
  .then(msg => `${msg}!!!`)
  .then(msg => console.log(msg));
