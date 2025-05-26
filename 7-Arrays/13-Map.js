const users = [
    {age: 13, name: 'Nico'},
    {age: 17, name: 'Seb'},
    {age: 23, name: 'Karl'},
    {age: 32, name: 'Feli'},
]

// const list = users.map(u => 
//     `<li>${u.name}</li>`
// )
// const html = `<ol>${list.join('')}</ol>`

// console.log(list)
// console.log(html)



// const mapped = users.map(u => {
//     return {
//         ...u,
//         mayor: u.age > 18
//     }
// })

// console.log(mapped)


const list = users
    .filter(u => u.age > 18)
    .map(u => `<li>${u.name}</li>`)
const html = `<ol>${list.join('')}</ol>`

console.log(list)
console.log(html)