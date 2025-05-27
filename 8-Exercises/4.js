const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]

function howManyPremiums(usrs) {
    return usrs.reduce((acc, el) =>
        el.plan !== 'free' ? acc + 1 : acc, 0)
}

function howManyMayors (usrs) {
    return usrs.reduce((acc, el) =>
        el.age > 18 ? acc + 1 : acc, 0)
}

console.log(howManyPremiums(users))
console.log(howManyMayors(users))