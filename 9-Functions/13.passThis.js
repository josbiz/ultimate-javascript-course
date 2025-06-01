function greeting(...rest) {
    console.log(this, rest)
}

//greeting()

// changing the context of this

//greeting.call({ property: "hello world"}, 1, 5)

//greeting.apply({ property: "hello world"}, [1, 5])

// let newGreeting = greeting.bind({propery: "hello world"})
// newGreeting(1, 5)

//greeting.bind({propery: "hello world"})(1, 5)



const user = {
    name: 'Nicolas',
    citizenships: ['Chile', 'Colombia', 'New Zealand'],
    showCitizenships () {
        this.citizenships.forEach(function (el) {
            console.log(this.name, el)
        }.bind(this))
    }
}

user.showCitizenships()