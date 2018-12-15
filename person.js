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

module.exports.person = person;