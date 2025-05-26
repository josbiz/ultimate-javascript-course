const users = [
    {age: 13, name: 'Nico'},
    {age: 17, name: 'Seb'},
    {age: 23, name: 'Karl'},
    {age: 32, name: 'Feli'},
]

const adults = users.filter((el) => el.age > 18 )
// reject its not a function anymore
const minors = users.filter((el) => el.age < 18 )

console.log(adults)
console.log(minors)