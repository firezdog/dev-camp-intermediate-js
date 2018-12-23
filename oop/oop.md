# OOP

## Classes
Programming around classes and objects (instances)
Abstraction / modularity
JS (in earlier versions) could only mimic classes

### new
1. creates empty object
2. implicit value of 'this'
3. implicit "return this" to function (so really we get back some kind of function that is linked to an object?)
4. adds __proto__ (prototype) link to constructor function

### constructors (inheritance)
In ES5, inheritance = calling the super-class's constructor function in the sub-class's constructor function.  This was accomplished using "call" (name starts to make sense).  In ES6 there are now classes, and you can inherit from another class using the "extends" keyword and then calling the parent constructor with the super keyword in the class constructor.  Nice bit of sugar from ES5: "arguments" keyword refers to all the arguments passed into a function (and was used when calling the "superclass" constructor).

## Prototypes

### What?
Properties of constructor functions (point back to them) and also of the objects created from those functions using "new"

### __proto__, prototypes, and constructors
__proto__ used to change inherited properties for all instances from a particular instance; prototype used to change from the constructor function ("class")

### prototype vs. constructor
instance.__proto__ = class.prototype
class.prototype.constructor = class
e.g.: a = [] (new Array()); a.__proto__ === Array.prototype
methods are inherited up the prototype chain (prototype inheritance is transitive) -- e.g. hasOwnProperty comes to a from Array and to Array from Object
(Object has no prototype)
It is more efficient to place inherited methods on the prototype of the constructor function than in the function itself (???) -- that way, the function isn't redefined each time the constructor method is called