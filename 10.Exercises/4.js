function sum(fn, ...rest) {
    let result = rest.reduce((acc, el) => acc + el)

    fn(result)
}

sum(result => {
    console.log(result)
}, 1,2,3,4)