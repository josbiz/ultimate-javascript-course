const greeting = "Hello \\   World! \nWelcome to\t \"Ultimate Javascript\""

// ` backticks
const name = "Nicolas"
const lastname = "Schurman"
const completeName = name + " " + lastname
function template (completeName) { 
    return `Hello ${completeName}

Welcome to "Ultimate Javascript"

Greetings Nico.
`
}

console.log(template('Jos'))