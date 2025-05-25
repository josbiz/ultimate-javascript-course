
// let user = {
//     id: 1,
//     email: 'nico@holamundo.io',
//     name: 'Nicolas',
//     address: {
//         street: 'Queen st',
//         number: 15,
//     },
//     active: true,
//     passwordRecovery: function () {
//         console.log('Recovering password...')
//     }
// }


function createUser(name, email) {
    return {
        email,
        name,
        active: true,
        passwordRecovery: function () {
            console.log('Recovering password...')
        }
    }
}

let user = createUser('Nicolas', 'nico@holamundo.io')
let user1 = createUser('Felipe', 'felipe@holamundo.io')

console.log(user)
console.log(user1)