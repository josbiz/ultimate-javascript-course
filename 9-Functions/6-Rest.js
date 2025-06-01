
// rest mus be the last parameter
// contain
const sum = (a,b, ...rest) => {
    console.log(rest)
}

const logMsg = (desc, ...msgs) => {
    for(let msg of msgs) {
        console.log(desc, msg)
    }
}

sum(1,2,3,45,6)

logMsg('Server', "Error 1", "Request accepted", 'active socket')
let msgs = ['Server', "Error 1", "Request accepted", 'active socket']
logMsg('Mobile client: ',  ...msgs)