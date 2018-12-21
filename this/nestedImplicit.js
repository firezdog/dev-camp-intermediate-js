var person = {
    firstName: "Alex",
    sayHi: function() {
        return "Hi " + this.firstName
    },
    determineContext: function() {
        return this === person
    },
    father: {
        sayHi: function() {
            return "Hello " + this.firstName
        },
        determineContext: function() {
            return this === person
        }
    }
}

// "Hi Alex"
console.log(person.sayHi());
// "Hello undefined" -- firstName is not defined for father
console.log(person.father.sayHi());
// true
console.log(person.determineContext());
// false
console.log(person.father.determineContext());