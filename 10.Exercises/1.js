const obj = {
    name: 'Nicolas'
}

function Extend() {
    this.login = () => {
        console.log('Loging in', this.name)
    }
    this.logout = () => {
        console.log('Loging out', this.name)
    }
}

Extend.call(obj)

console.log(obj)
obj.login()
obj.logout()