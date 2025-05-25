function User (name) {
    this.name = name
}

console.log(User.name)
console.log(User.length)

const U = User
let user = new U('Nicolas')

console.log(user)

function of(Fn, arg) {
    return new Fn(arg)
}

let user1 = of(User, 'Jose')
console.log(user1)

function returned () {
    return function () {
        console.log('Hello World')
    }
}

let greeting = returned()
greeting();
