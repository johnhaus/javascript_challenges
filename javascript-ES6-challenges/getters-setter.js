// Getters and setters

var attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(', ');
  }
};

attendance.addName = 'Joanne';
console.log(attendance.list);
console.log(attendance._list);

attendance.addName = 'Anna';
attendance.addName = 'Charlie';
console.log(attendance.list);
console.log(attendance._list);

console.log('========== Classes ==========');

class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
};

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);
