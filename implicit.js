let person = {
    first: "Elie",
    sayHi: function() {
        return "Hi " + this.first
    },
    determineContext: function() {
        return this === person
    }
}

// true
console.log(person.determineContext())
let outsideContext = person.determineContext;
// false -- this is no longer being called in the context of person!
console.log(outsideContext())