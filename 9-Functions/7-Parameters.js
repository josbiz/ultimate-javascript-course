/**
 * {
 *  url: ...
 *  bucket: ...
 *  port: 80
 * }
 */

const config = {
    url: 'https://holamundo.io'
}

// define all default parameters is needed
function APIConfig (url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`
}

console.log(APIConfig('https://chaomundo.io'))