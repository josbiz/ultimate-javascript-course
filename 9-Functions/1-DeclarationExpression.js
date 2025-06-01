console.log(substract) // Hoisting
// Function declaration

// Named function
function sum() {
    console.log('sum...')
}

// Anonymous function
// function () {
//     console.log('af')
// }

// Function expression
let substract = function () { // Anonymous function expression
    console.log('substracting...')
}

let multiply = function multi () { // Named function expression
    console.log('multiplying...')
}

const divide = () => { // fat arrow function (anonymous)
    console.log('divide...')
}
