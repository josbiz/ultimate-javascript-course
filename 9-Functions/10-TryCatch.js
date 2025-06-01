function sumAll(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('Parameter is not an array');
    }
    
    return arr.reduce((acc, el) => {
        if(typeof el !== "number" || Number.isNaN(el)) {
            throw new Error(`Element ${el} isnt a number`)
        }
        return acc + el;
    });
}

//console.log(sumAll([1,2,3,4]))

try { // try to exec the code
    //console.log(sumAll({prop: 1}))
    console.log(sumAll([1,2,NaN, 'hello']))
} catch(e) { // passing the error 
    console.log(e.message)
}

console.log('after try catch')