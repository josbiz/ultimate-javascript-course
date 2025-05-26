const users = [
    {id: 1, name: 'Nico'},
    {id: 3, name: 'Nico'},
    {id: 2, name: 'Feli'},
]

// const result = users.indexOf( {id: 1, name: 'Nico'})

// return the first object finded
// the function as a parameter is called predicate (function that returns true or false)
const result = users.find(user =>
    user.name === 'Nico'
)
// find index return the index haha
const result2 = users.findIndex(user =>
    user.name === 'Nico'
)
console.log(result)