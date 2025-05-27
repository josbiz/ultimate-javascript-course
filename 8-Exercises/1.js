function toAbsolute(arr) {
    return arr.map(el => {
        return Math.abs(el)
    })
}

const ns = [-2, 3, 5, -15]

const absolutes = toAbsolute(ns)

console.log(absolutes)