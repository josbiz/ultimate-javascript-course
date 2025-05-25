const dot = {
    x: 10,
    y: 15,
    draw () {
        console.log("Drawing...")
    }
}
//delete dot.draw;
//dot.draw() 

if('draw' in dot) {
    dot.draw()
}

console.log(Object.keys(dot))
for (let key of Object.keys(dot)) {
    console.log(key, dot[key])
}

for ( let entry of Object.entries(dot)) {
    console.log(entry)
}

for (let key in dot) {
    console.log(key, dot[key])
}