function Counter() {
    let count = 0
    return {
        count: (() => count++),
        getCount: (() => {return count}),
        setCount: ((newCount) => count = newCount)
    }
}

// you can either use 'new' or you can just call the function
const counter1 = new Counter()
const counter2 = new Counter()
counter1.count()
console.log(counter1.getCount())
counter1.setCount(15)
console.log(counter1.getCount())
console.log(counter2.getCount())