
let array = [2,5,7,15,-5,-100,55]
function howManyPositives (arr) {
    let count = 0
    arr.forEach(element => {
        if(element > 0) {
            count++;
        }
    });
    return count; 
}
let numbers = howManyPositives(array)
console.log(numbers)