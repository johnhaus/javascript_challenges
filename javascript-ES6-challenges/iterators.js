var title = 'ES6';
console.log(typeof title[Symbol.iterator]);

var iterateIt = title[Symbol.iterator]();
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());

function tableReady(arr) {
  var nextIndex = 0;
  return {
    next() {
      if(nextIndex < arr.length) {
        return {value: arr.shift(), done: false}
      } else {
        return {done: true}
      }
    }
  }
}

var waitingList = ['Sarah', 'Dave', 'Anna', 'Heather'];
var iterateList = tableReady(waitingList);

console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
