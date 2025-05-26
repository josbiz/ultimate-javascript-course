function sameSameButDiferent (obj1, obj2) {
    let butDiferent = false
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            butDiferent = true
        }
    }
    return !butDiferent
}

let result = sameSameButDiferent(
    { id: 1, name: 'Nico' },
    { id: 1, name: 'Lalo'}
)

console.log(result)