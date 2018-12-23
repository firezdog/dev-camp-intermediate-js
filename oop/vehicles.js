function Vehicle(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

// use "arguments" to pass all the arguments from this function to the constructor
function Car(make, model, year) {
    Vehicle.call(this, arguments)
    this.numWheels = 4
}

function Motorcycle(make, model, year) {
    Vehicle.call(this, arguments)
    this.numWheels = 2
}

const sample = new Car("Toyota", "Civic", "2002")
console.log(sample)
const sample2 = new Motorycle("Harley", "Davidson", "1998")
console.log(sample2) 