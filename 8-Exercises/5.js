const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]

function getMayors(arr) {
    let mayor = arr[0]
    for(let user of arr) {
        if(mayor.age < user.age) {
            mayor = user
        }
    }

    return mayor
}

const mayor = getMayors(users)
console.log(mayor)