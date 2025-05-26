// let numbers = [15, 10, -3]
// numbers.sort()
// numbers.reverse()
// console.log(numbers)


// let letters = ['z', 'a', 'd']
// letters.sort()
// console.log(letters)


// search ascii table to see characters priority
let letters = ['Z', 'a', 'd']
letters.sort((a, b) => {
    /**
     * a before b => 1
     * b before a => 1
     * if equals => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if(alower < blower) {
        return -1
    }
    if(alower > blower) {
        return 1
    }
    return 0;
})
console.log(letters)


let users = [
    {age: 15, name: 'Fel'},
    {age: 25, name: 'Nicolas'},
    {age: 13, name: 'Seb'},
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    
    if(a.age > b.age) return 1
    
    return 0;
})