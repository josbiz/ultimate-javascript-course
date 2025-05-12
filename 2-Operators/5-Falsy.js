// short-circuit

/* false values (falsy) */

// false (boolean)
// 0
// ''
// null
// undefined
// NaN

let name = 'Serge'
let username = name || 'Anonim'
console.log(name)


function fn1 () {
    console.log('im function 1')
    return false;
}

function fn2 () {
    console.log('im function 2')
    return true;
}

let x = fn1() && fn2()