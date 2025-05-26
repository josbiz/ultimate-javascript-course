let lenght = 7

function createArray (n) {
    let array = []
    let index = 1
    while(index < n + 1) {
        array.push(index)
        index++;
    }

    return array
}

let result = createArray(lenght)
console.log(result)