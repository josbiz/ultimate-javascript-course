// function hello() {
//     return 'Hello World'
// }

// its a anomnym function, it always has a const saving it
// const hello = () => {
//     return 'Hello World'
// }

// it has implicit return (same, same, but different)
const hello = message => message + 'Hello world'
const hello2 = message => {
    return message + 'Hello world'
}

const result = hello("Haha")
console.log(result)