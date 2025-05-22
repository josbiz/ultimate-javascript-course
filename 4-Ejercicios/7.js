function completePrice (price, tax){
    return price + (price*tax)
}

let result = completePrice(19.90, 0.15)
console.log(result)