let arr1 = [1, 2]
let arr2 = [3, 4]

let combined = arr1.concat(arr2)

//console.log(arr1, arr2, combined)

//let divided = combined.slice(1, 3)
let divided = combined.slice(1)

let copy = combined.slice() // this make a copy of the array

console.log(combined, divided)