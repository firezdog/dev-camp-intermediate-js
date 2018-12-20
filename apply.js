const person = require('./person').person

this.firstName = "Joe"

console.log(person.sayHi.apply(this));
person.add(5, 7);
person.add.apply(this, [5, 7, null]);
person.add.call({firstName: 'Allison'}, 5, 7);
try {
    person.add.apply(this, 5, 7);
} catch {
    console.log("can't do that")
}