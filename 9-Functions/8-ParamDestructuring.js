// const config = {
//     url: "https://holamundo.io",
//     address: {
//         street: "asd",
//         number: 80 
//     }   
// }
// const config = [
//     "https://holamundo.io",
//     145,
//     80
// ]

// function webServer ([url, bucket, port]) {
//     return url;
// }

// console.log(webServer(config))

const config = {
    url: "https://holamundo.io",
    address: {
        street: "asd",
        number: 80 
    }   
}

function webServer ({url, ...rest}) {
    console.log(rest)
    return url;
}

console.log(webServer(config))