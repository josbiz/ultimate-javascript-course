let object = {
    id: 1,
    name: 'Nico',
    login: function () {},
    logout: function () {}
}

function whatMethods (obj) {
    for(let key in obj) {
        if(typeof obj[key] === "function" ) {
            console.log(key)
        }
    }
} 

whatMethods(object)