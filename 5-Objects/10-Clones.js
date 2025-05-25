let dot = {
    x: 10,
    y: 15,
}

// args in second place and ahead is added in the first object
let cloneDot = Object.assign({}, dot, { z: 20, x: 1})

console.log(dot)
console.log(cloneDot)

let dotCopy = Object.assign({}, dot)

console.log(dot, dotCopy)

let copy = { ...dot }
console.log(copy)

let copy2 = {}
for (let key in dot) {
    copy2[key] = dot[key]
}
console.log(dot, copy2)