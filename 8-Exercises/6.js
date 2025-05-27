const myArray = [
    "Hello",
    12,
    true,
    "World",
    {},
    { id: 15 },
    ['lala'],
]

function divideByType(arr) {
    return arr.reduce((acc, el) => {
        let key = typeof el;
        acc[key] = acc[key] ? acc[key] : []
        acc[key].push(el)
        return acc;
    }, {})
}

let arr = divideByType(myArray)
console.log(arr)