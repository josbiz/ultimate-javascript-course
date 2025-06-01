// Inside of an object: this reference an object

// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this)
//     }
// }

// user.logout = function logout() {
//     console.log(this)
// }
// user.logout();


// In a function: this reference to the window object, global
// function log() {
//     console.log(this)
// }
// log();


/**
 * literal object created
 * link object to this
 * prototype linked
 * if return nothing, then return this 
 * 
 */
function Log(message) {
    this.message = message
    console.log(this)
}
const l = new Log('Hello World')


// If new is used, reference to the object created 