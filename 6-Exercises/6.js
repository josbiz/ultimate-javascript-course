let obj1 = { id: 1, name: 'Nico' }
function createCopy (obj) {
    let copy = {}
    for (let key in obj) {
        copy[key] = obj[key]   
    }

    return copy;
}

let obj2 = createCopy(obj1);
console.log( { obj1, obj2 })