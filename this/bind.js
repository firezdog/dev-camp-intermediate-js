const person = require('./person').person

const sayJohn = person.sayHi.bind({firstName: "John"})
const sayMichael = person.sayHi.bind({firstName: "Michael"})
const JohnAdds = person.add.bind({firstName: "John"})

console.log(sayJohn())
console.log(sayMichael())
JohnAdds(3, 5)