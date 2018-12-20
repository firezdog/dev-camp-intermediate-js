function timedHi () {
  const sayHi = (stop) => { console.log("Hello"); clearInterval(stop) }
  let i = 1;
  const stop = setInterval(() => console.log(i++), 1000)
  setTimeout(sayHi.bind(this, stop), 5000)
}
