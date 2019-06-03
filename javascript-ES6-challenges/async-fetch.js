// Async with fetch

const githubRequest = async(loginName) => {
  try {
    var response = await fetch(`https://api.github.com/
    users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login):
    console.log(followerList);
  } catch(e) {    // catch errors
    console.log("Data didn't load", e);
  }
};

githubRequest('johnhaus');

// done as an anonymous function
(async(loginName) => {
  try {
    var response = await fetch(`https://api.github.com/
    users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login):
    console.log(followerList);
  } catch(e) {    // catch errors
    console.log("Data didn't load", e);
  }
})('johnhaus');
