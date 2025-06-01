const user = {
    name: 'Fel',
    lastname: 'Smith',
    get completeName() {
        return `${user.name} ${user.lastname}`;
    },
    set completeName(value) {
        const [name, lastname] = value.split(" ")
        this.name = name;
        this.lastname = lastname;
    }
}

user.completeName = 'Hello'
console.log(user.completeName)