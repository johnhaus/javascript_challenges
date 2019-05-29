// an example of default parameters

function add(x=5, y=7) {
  console.log(x+y);
}

add();


function haveFun(activityName='hiking', time=3) {
  console.log(`Today I will go ${activityName} for ${time} hours.`)
}

haveFun(); // will use defaults
haveFun('biking', 5); // input overrides defaults
