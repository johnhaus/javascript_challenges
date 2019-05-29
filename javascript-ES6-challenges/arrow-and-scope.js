// Arrow functions with 'this' scope

// First option- ES5 method
var person = {
  first: 'Doug',
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions: function() {
    var _this = this;
    this.actions.forEach(function(action) {
      var str = _this.first + ' likes to ' + action;
      console.log(str);
    });
  }
};

person.printActions();

// Second option- ES5 method
var person = {
  first: 'Doug',
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions: function() {
    this.actions.forEach(function(action) {
      var str = this.first + ' likes to ' + action;
      console.log(str);
    }.bind(this));
  }
};

person.printActions();

// New way with ES6
var person = {
  first: 'Doug',
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    this.actions.forEach(action => {
      var str = this.first + ' likes to ' + action;
      console.log(str);
    });
  }
};

person.printActions();
