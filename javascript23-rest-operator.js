// accept any number of agruments

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 4);
  };
})();
console.log(sum(1, 2, 3));
