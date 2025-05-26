
let array = [2,5,7,15,-5,-100,55]
function getMinorMaxim (arr) {
    let minor = 0
    let maxim = 0
    arr.forEach(element => {
        if(element < minor) {
            minor = element
        }
        if(element > maxim) {
            maxim = element
        }
    });
    return [minor, maxim] 
}
let numbers = getMinorMaxim(array)
console.log(numbers)