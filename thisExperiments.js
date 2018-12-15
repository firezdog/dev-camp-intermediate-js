function defineVariables() {
    this.name = "Alex"
    // this actually errors out!
    // name = "Joe"
    let name = "Susan"
    printVariable(name)
}

function printVariable(variable) {
    console.log(variable)
}

// printVariable will print Susan
defineVariables()
// Alex
console.log(name)