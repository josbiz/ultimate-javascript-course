let object = { name: "Nicolas" }

function addId(obj) {
    if(typeof obj === "object") {
        obj.id = Math.random()
    }
    return obj
}

addId(object)
console.log(object)