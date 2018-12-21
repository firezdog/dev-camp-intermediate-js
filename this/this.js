name = "Alex"

function whatIsThis() {
    return this
}

function variablesInThis() {
    this.name = "Alex"
    this.dog = "Joe"
}

// expect "undefined", because the console has no "name"
console.log(this.name)

// expect "Alex"
console.log(whatIsThis().name)

let that = this
// this is undefined?
console.log(that.name)

// this is false?
console.log(whatIsThis() === that)

let data = {}
data.instructor = "Elie"
console.log(data.instructor)

// equal?
console.log(this === whatIsThis())

// still not equal...
let test = this === whatIsThis()
console.log(test)

variablesInThis()
// return true
console.log(dog === "Joe")