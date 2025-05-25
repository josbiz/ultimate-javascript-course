const user = { id: 1 };

user.name = 'Nicolas'
user.save = function () {
    console.log('Saving ', user.name)
}

user.save()

delete user.name
delete user.save

console.log(user)

// Dont let modify the object on attibutes and attributes values
const user1 = Object.freeze({id: 1})
user1.name = 'Nico'
console.log(user1) 

// Let modify only the values of attributes
const user2 = Object.seal({id: 2})
user2.id = 3
console.log(user2)