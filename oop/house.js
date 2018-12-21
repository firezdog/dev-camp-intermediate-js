// ES 6

class House {
    constructor(bedrooms, bathrooms, sqFeet) {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.sqFeet = sqFeet
    }
    toString() {
        console.log(`This house has ${this.bathrooms} bathrooms, ${this.bedrooms} bedrooms, and is ${this.sqFeet} square feet.`)
    }
}

// ES 5

function OldHouse(bedrooms, bathrooms, sqFeet) {
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.sqFeet = sqFeet
    this.toString = function() {
        console.log(`This house has ${this.bathrooms} bathrooms, ${this.bedrooms} bedrooms, and is ${this.sqFeet} square feet.`)
    }
}

house1 = new House(2,2,1000)
house1.toString()

house2 = new OldHouse(2,2,1000)
house2.toString()