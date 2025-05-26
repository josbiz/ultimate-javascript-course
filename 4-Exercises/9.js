
let array = [
  [ 1, {  name: 'Nicolas' } ],
  [ 2, { name: 'Felipe' } ],
  [ 3, {  name: 'Pig' } ]
]

function toPairs (arr) {
    let newArray = []

    arr.forEach(element => {
        let id = element[0]
        let obj = element[1]
        obj.id = id
        newArray.push(obj)
    });

    return newArray
}

let result = toPairs(array)
console.log(result)
