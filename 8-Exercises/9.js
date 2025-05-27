const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]

const clients = [
    { elderly: 12, name: 'Michael', account: 'premium'},
    { elderly: 43, name: 'John', account: 'free'},
    { elderly: 22, name: 'Happy', account: 'free'},
]

// Unified structures
// fusion
// sort
// create html template

const clientsObj = clients.map(u => ({
    age: u.elderly,
    name: u.name,
    plan: u.account
})) 

const all = [...users, ...clientsObj]

all.sort((a, b) => {
    if(a.age < b.age) {
        return 1;
    }
    if(a.age > b.age) {
        return -1;
    }
    return 0;
})

const list = all.map(u => 
    `<li>Name: ${u.name}, Age: ${u.age}</li>`)

const html = `
<ul>
    ${list.join(`
        `)}
</ul>`

console.log(html)