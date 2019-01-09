// card counter for blackjack

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card < 7) {
    count++;
  } else if (card > 6 && card < 10) {
    count;
  } else {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}


// console.log(cc(4));
// console.log(cc(5));
console.log(cc(3));
console.log(cc(3));
console.log(cc(3));
console.log(cc(10));
console.log(cc(8));

console.log(cc(10));
console.log(cc("k"));
console.log(cc("q"));
console.log(cc("j"));
