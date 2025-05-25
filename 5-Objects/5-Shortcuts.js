let obj = {}

let obj2 = new Object()

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function User () {
    this.name = "Ern"
}

let user = new User();
console.log(user.constructor)

const s1 = "1 + 1"
const s2 =  new String("1 + 1")
console.log(eval(s1), eval(s2))