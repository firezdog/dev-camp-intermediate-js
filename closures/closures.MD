# 1 What is it?

Function
Uses variables defined in previously returned "outer" functions (e.g. "curry")
(function inside of function != closure )
inner function: a function inside another function (possibly returned by it) to which the context of its "outer" function is available.

# 2 Use Case: Private Variables
create variables that can't be modified (or seen?) externally using closures
TODO: How would you combine this with constructor functions?