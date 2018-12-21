function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// compare:

this.firstName = "Michael"
this.lastName = "Michael"

person("Susan", "Susan")
console.log(`${firstName} ${lastName}`)

const John = new person("Micahel", "Michael")
console.log(`${firstName} ${lastName}`)