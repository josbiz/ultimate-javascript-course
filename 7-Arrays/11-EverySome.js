let users = [
    { id: 1, active: true},
    { id: 2, active: true},
    { id: 3, active: true},
]

// let allActives = users.every((a) => {
//     console.log('todos activos', a.active)
//     return a.active
// })

// console.log(allActives)

// exec until find true
let someActive = users.some(u => {
    console.log(u.id)
    return u.active
})

console.log(someActive)