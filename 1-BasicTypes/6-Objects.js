// Tv character

let name = "Tanjiro"
let anime = "Demon slayer"
let age = 16;

// literal object
// let character = {}

let character = {
    name: "Tanjiro",
    anime: "Demon slayer",
    age: 16, 
};

console.log(character)
console.log(character.name)
console.log(character['anime'])

character.age = 20;
character["age"] = 18;

delete character.anime
console.log(character)