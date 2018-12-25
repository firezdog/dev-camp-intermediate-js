// inner function retains context of outer function

function outer() {
    const data = "closures are"
    return function inner() {
        const innerData ="cool"
        return `${data} ${innerData}.`
    }
}

// no effect because these are not part of the context
const outerData = "this is"
const innerData = "tricky"

console.log(outer()())

function generate_adder(adder) {
    return function(adder2) {
        return adder + adder2
    }
}

const add4 = generate_adder(4)
// 10
console.log(add4(6))