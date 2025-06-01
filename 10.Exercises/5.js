function order(text, fn) {
    let result = text.toLowerCase()
        .split('')
        .filter(letter => letter !== ' ')
        .sort()
        .join('')
    fn(result)
}

order('hello world', console.log())