function User (name) {
    this.id = Math.random();
    this.name = name
}

let user = new User('Felipe');
let user2 = new User('Pig');
console.log(user, user2)