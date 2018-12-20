"this" -- javascript keyword
determined by execution context
4 rules: global, object / implict, explicit, new

global:
outside of declared object (global context) (even if it's in a function)
"this" refers to global object (e.g. "window")
function whatIsThis() returns global object
what happens if we attach properties to "this" as global object?
These become global variables
strict mode ("use strict"): value of keyword this in function is undefined
note: strict mode can be declared globally or within a function

implicit:
inside object, value of "this" is closest parent

call / apply / bind (explicit?):
We can choose the context for this -- can only be used by functions
call -- thisArg, params, invoked immediately
use call to store functions in one object but allow them to access values from another (is that really good from the perspective of encapsulation?)
apply -- thisArg, array of params, invoked immediately
bind -- thisArg, params, not invoked immediately (returns function with the appropriate this) -- good for asynchronous code (like setTimeout)
setTimeout -- run function after some time (function to exec, ms to wait)