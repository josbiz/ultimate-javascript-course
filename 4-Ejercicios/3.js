function getByIdx (arr, idx) {
    if(idx <= arr.lenght || idx < 0) {
        return "No valid"
    }
    return arr[idx]
}

let result = getByIdx([1, 2], 1)
console.log(result)

