function createUser (name) {
    return {
        id: Math.random(),
        name
    }
}

let user = new User('Felipe');
let user2 = new User('Pig');
console.log(user, user2)