const obj = {
    name: 'Nicolas'
}

function extend(user) {
    const methods = {
        login() {
            console.log('Loging in', this.name)
        },
        logout() {
            console.log('Loging out', this.name)
        },
    }
    return Object.assign(user, methods)
}

const user = extend(obj)
console.log(user)
user.login()