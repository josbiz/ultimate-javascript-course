// Fat arrow functions dont have arguments, super and this

const sum  = (a, b) => {
    // console.log(arguments) // arguments is a object
    // let total = 0
    // for (let value of arguments) {
    //     total += value
    // }
    // return total;

    return Array.from(arguments).reduce((acc, el) => acc + el)
}

console.log(sum(1, 2, 3, 4))