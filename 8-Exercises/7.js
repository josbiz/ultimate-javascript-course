const users = [
    { age: 17, name: 'Nico', plan: 'premium'},
    { age: 13, name: 'Pig', plan: 'free'},
    { age: 32, name: 'Fer', plan: 'free'},
    { age: 25, name: 'Feli', plan: 'gold'},
]


function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let value = el[prop];

        acc[value] = acc[value] ? acc[value] : []
        acc[value].push(el)
        return acc;
    }, {})
}

const grouped = groupBy(users, 'plan')
console.log({grouped})