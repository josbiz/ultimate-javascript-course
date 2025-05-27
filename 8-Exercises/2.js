const myArray = [
    "Hello",
    12,
    "World",
    {},
    { id: 15 },
    ['lala'],
]

function divideByType (arr) {
    return {
        numbers: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objects: arr.filter(n => typeof n === "object"),
    }
}

const newArray = divideByType(myArray)
console.log(newArray)