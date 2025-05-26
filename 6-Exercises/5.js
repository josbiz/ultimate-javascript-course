let object = {
    id: 1,
    name: 'Nico',
    login: function () {},
    logout: function () {}
}

let property = 'name'

function hasProp (obj, _property) {
    let props = Object.keys(obj)
    for(let prop of props) {
        if (_property == prop) {
            return true;
        }
    }
    return false;
} 

console.log(hasProp(object, property))