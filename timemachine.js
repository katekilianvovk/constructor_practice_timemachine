var timeMachine = function(owner, color, sizeInside, sizeOutside) {
  this.owner = owner;
  this.color = color;
  this.sizeInside = sizeInside;
  this.sizeOutside = sizeOutside;
  this.passengers = [];
};

timeMachine.prototype.addPassenger = function(passenger) {
  this.passengers.push(passenger);
};

timeMachine.prototype.passengerCount = function() {
  if (this.passengers.length === 0) {
    return 0;
  }
};

timeMachine.prototype.isRealTardis = function() {
  if (this.sizeInside < this.sizeOutside) {
    return false;
  } else if (this.color !== "blue") {
    return false;
  };
  if ((this.sizeInside > this.sizeOutside) && (this.color === "blue")) {
    return true;
  }
};

timeMachine.prototype.listPassengers = function() {
  return this.passengers;
};

timeMachine.prototype.nameLengths = function() {
  return this.passengers.map(function(passenger) {
    return passenger.length;
  }).reduce(function(accumVal, currVal) {
    return accumVal += currVal;
  }, 0);
};

module.exports = timeMachine;
