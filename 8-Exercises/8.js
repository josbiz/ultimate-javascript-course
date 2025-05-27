const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]

const premium = users.filter(u => u.plan !== 'free')
premium.sort((a, b) => {
    if(a.age < b.age) {
        return 1;
    }
    if(a.age > b.age) {
        return -1;
    }
    return 0;
})

const list = premium.map(u => `<li>${u.name}</li>`)
const html = `<ul>${list.join('\n')}</ul>`
console.log(html)