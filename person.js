var person = {
    firstName: "Alex",
    add: function(a, b) {
        console.log(`This is ${this.firstName}'s calculation: ${a + b}`)
    },
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

module.exports.person = person;