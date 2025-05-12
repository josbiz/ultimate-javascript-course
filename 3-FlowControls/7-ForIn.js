let user = {
    id: 1,
    name: 'Bolivar',
    age: 25
}

// use it in objects to get the props
for (let prop in user) {
    // console.log(prop)
    console.log(prop, user[prop])
}

let animals = ['Pig', 'Dragon', 'Dog']
for (let index in animals) {
    console.log(index, animals[index]);
}