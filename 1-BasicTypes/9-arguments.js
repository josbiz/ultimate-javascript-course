// Basic function
// function sum() {
//     return 2 + 2
// }

// passing an argument  
// function sum(a) {
//     return a + 2; // <- when arguments are referenced inside a funciton, they're are parameters
// }

// let result = sum(5) // <- this is an argument;
// console.log(result);

// console.log(typeof sum)

function sum(a, b) {
    console.log(arguments) // getting all the arguments passed
    return a + b;
}

let result = sum(5, 8, 4 , 4) 
console.log(result);
