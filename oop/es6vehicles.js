class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

// Look Ma, no "call"

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
}

console.log(new Car("Toyota", "Civic", "2002"))
console.log(new Motorcycle("Harley", "Davidson", "2002"))