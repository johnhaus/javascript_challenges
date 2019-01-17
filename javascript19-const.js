// using const in a code- all caps should be used
// with const variables

function repeatPrint(str) {
  "use strict";

  // change code below this line

  const THE_SENTENCE = str + " used in this code!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(THE_SENTENCE);
  }

  // change code above this line

}
repeatPrint("Const");
