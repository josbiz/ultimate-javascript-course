
let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: "Felipe"
}, {
    id: 3,
    name: "Pig"
}]


function toPairs (arr) {
    let id = 1
    let newArray = []

    arr.forEach(element => {
        newArray.push([id, element])
        id++;
    });

    return newArray
}

let result = toPairs(array)
console.log(result)