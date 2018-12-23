function Vehicle(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true
}

Vehicle.prototype.turnOff = function () {
    this.isRunning = false
}

Vehicle.prototype.beep = function () {
    if (this.isRunning) { return "beep" }
    return "..."
}

// use "arguments" to pass all the arguments from this function to the constructor
function Car(make, model, year) {
    Vehicle.apply(this, arguments)
    this.numWheels = 4
}

// if you use "new" to set the prototype, you get an actual Vehicle object...which is weird; if you just use Vehicle.prototype, then all subclasses of Vehicle will have the same prototype, which also isn't right.  Solved this using the spread operator -- which seems to work.

Car.prototype = {...Vehicle.prototype}

function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments)
    this.numWheels = 2
}

Motorcycle.prototype = {...Vehicle.prototype}

const sample = new Car("Toyota", "Civic", "2002")
const sample2 = new Motorcycle("Harley", "Davidson", "1998")
sample2.turnOn()
console.log(sample2.beep())
sample2.turnOff()
console.log(sample2.beep())