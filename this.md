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