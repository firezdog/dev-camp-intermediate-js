function gen_counter() {
    let count = 0
    return (arg) => { 
        if(arg === "get") { return count } 
        else if (typeof(arg) == 'number') { return count = arg } 
        ++count 
    }
}

const counter1 = gen_counter()
const counter2 = gen_counter()

function repeat(n, fn) {
    for (let i = 0; i < n; i++) {
        fn()
    }
}

repeat(5, counter1)
counter2(1003)
console.log(counter1("get"))
console.log(counter2("get"))