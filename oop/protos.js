function User (name) {
    this.name = name
}

const person1 = new User("Susan")
const person2 = new User("Sarah")

try {
    person1.sayHi()
} catch {
    console.log("This method is not implemented.")
}

// __proto__ for instances

person1.__proto__.sayHi = function() {
    console.log(`Hi, my name is ${this.name}.`)
}

try {
    person2.sayHi()
} catch {
    console.log("This method is not implemented.")
}

// prototype for functions ("classes")

User.prototype.sayHi = () => console.log("Arribaderci")

person2.sayHi()