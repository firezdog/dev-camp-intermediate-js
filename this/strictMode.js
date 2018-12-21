function causeError() {
    "use strict"
    this.name = "Larry"
}

function noError() {
    this.name = "Larry"
}

try {
    causeError()
} catch {
    console.log("Oops -- that would cause an error")
}

try {
    noError() 
} catch {
    console.log("No error here :)")
}