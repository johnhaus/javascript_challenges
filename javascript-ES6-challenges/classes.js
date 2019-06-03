// creating a class

class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels.`);
  }
}

var van = new Vehicle('van', 4);

van.describeYourself();

// Extending the class
class SemiTruck extends Vehicle {
  constructor() {
    super('semi truck', 18)
  }
}

var groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();
