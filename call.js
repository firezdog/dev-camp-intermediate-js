const person = require('./person').person
this.firstName = "Joe"

// "Hello undefined"
console.log(person.sayHi.call(person.father))
// "Hello Alex"
console.log(person.sayHi.call(person))
// "Hello Joe"
console.log(person.sayHi.call(this))