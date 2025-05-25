
console.log(
    Math.PI, // return pi value
    Math.abs(-15), // return positive value of a natural number
    Math.round(15.5), // round to nearest integer
    Math.round(15.3),
    Math.floor(15.9),
    Math.ceil(15.1),
    Math.pow(2, 3), // power 
    Math.sqrt(9) // return the square root of a number
) 

console.log(Math.random());

function getRandom (min, max) {
    return Math.random() * (max - min) + 1
}

console.log(getRandom(1, 10))