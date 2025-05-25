const greeting = "Hello World"

const goodbye = new String("Bye World")

// string
console.log(typeof greeting)
// object
console.log(typeof goodbye)

console.log(greeting.length)
console.log(greeting.indexOf("Wo"))
console.log(greeting.indexOf("asd")) // return numbers
// if (greeting.indexOf("Wo") >= 0)
console.log(greeting.includes("asd")) // return booleans
console.log(greeting.replace("World", "Nicolas")) // replace text
// if want it to be save, asign it to a variable
console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())

console.log(greeting.substring(0, 5))
console.log(greeting.substr(2, 5)) // deprecated

const whitespace = "   Hello World  "
console.log(whitespace.trim());
console.log(whitespace.trimStart());
console.log(whitespace.trimEnd());

