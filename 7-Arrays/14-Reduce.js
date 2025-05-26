// const numbers = [1, 2, 3, 4]
// const sum = numbers.reduce((index, el) => {
//     return index + el
// }, 0)
// console.log(sum)


// const nested = [[1, 2], 3, [4, 5]]
// const plane = nested.reduce((index, el) => index.concat(el), [])
// console.log(plane)


const users = [
    {age: 13, name: 'Nico'},
    {age: 17, name: 'Seb'},
    {age: 23, name: 'Karl'},
    {age: 32, name: 'Feli'},
]

const indexed = users.reduce((index, el) => ({
    ...index,
    [el.name]: el
}), {})

console.log(indexed)