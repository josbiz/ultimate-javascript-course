function User () {
    this.name = 'Nicolas'
    let log = function () { // this is a private attribute
        console.log('logging...')

    }
    this.save = function () { // this can be access publicly
        log()
        console.log('saving...')
    }
}

const user = new User()
user.log = function () {
    console.log('lala')
}

user.save()