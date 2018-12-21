function timedHi () {
  const sayHi = (stop) => { console.log("Hello"); clearInterval(stop) }
  let i = 1;
  const stop = setInterval(() => console.log(i++), 1000)
  setTimeout(sayHi.bind(this, stop), 5000)
}

const alex = {
  firstName: "Alex",
  sayHi: () => {
    setTimeout(() => console.log(`Hi ${this.firstName}`), 1000)
  },
  sayHiAgain: function () {
    setTimeout.apply(this, [() => console.log(`Hi ${this.firstName}`), 1000])    
  },
  sayHiYetAgain: () => {
    setTimeout.apply(this, [() => console.log(`Hi ${this.firstName}`), 1000])
  },
  // use bind on the callback
  anotherHi: function () {
    setTimeout(
      (() => console.log(`Hi ${this.firstName}`)
      ).bind(this), 
      1000)
  }
}

this.firstName = "Joe"
// hi Joe (!)
alex.sayHi()
// hi Alex
alex.sayHiAgain()
// hi Joe (!) -- lambda changed context (or kept context from changing)
alex.sayHiYetAgain()
// hi Alex
alex.anotherHi()