const person = require('./person').person
this.firstName = "Joe"

// "Hello undefined"
console.log(person.sayHi.call(person.father))
// "Hello Alex"
console.log(person.sayHi.call(person))
// "Hello Joe"
console.log(person.sayHi.call(this))
// true -- person is the context
console.log(person.determineContext())
// false -- father is now the context
console.log(person.determineContext.call(person.father))