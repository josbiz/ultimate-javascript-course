
// { id: 1, recoverPassword: function(){} }
function User() {
    this.id = 1;
    this.recoverPassword = function () {
        console.log('Recovering password')
    }
}

let user = new User();
console.log(user)