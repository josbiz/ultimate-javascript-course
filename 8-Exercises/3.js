const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]

function getPaidUsers(usrs) {
    return usrs.filter(u => u.plan !== 'free')
}

console.log(getPaidUsers(users))