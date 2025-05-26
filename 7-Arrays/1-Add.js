const letters = ['a', 'b']

// add at the end
letters.push('c', 'd')
console.log(letters)

// add at the begining 
letters.unshift('y', 'z')
console.log(letters)

// add element in the middle
letters.splice(3, 0, 1, 2)
console.log(letters)