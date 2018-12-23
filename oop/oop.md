OOP

Programming around classes and objects (instances)
Abstraction / modularity
JS (in earlier versions) could only mimic classes

new
1. creates empty object
2. implicit value of 'this'
3. implicit "return this" to function (so really we get back some kind of function that is linked to an object?)
4. adds __proto__ (prototype)

constructors (inheritance)
In ES5, inheritance = calling the super-class's constructor function in the sub-class's constructor function.  This was accomplished using "call" (name starts to make sense).  In ES6 there are now classes, and you can inherit from another class using the "extends" keyword and then calling the parent constructor with the super keyword in the class constructor.  Nice bit of sugar from ES5: "arguments" keyword refers to all the arguments passed into a function (and was used when calling the "superclass" constructor).