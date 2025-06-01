let position = 'inside'
function scope() {
    // this function and variables only can be used inside the scope function
    position = 'outside'
    console.log(position)
    function greeting () {}
    var old = 'dont use it'
    let hi = 'hi'
    const hello = 'hello'
    
}
// thats why weve error right here
console.log(greeting)
console.log(old)
console.log(hi)
console.log(hello)

console.log(position)
scope()
console.log(position)
