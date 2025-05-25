function Dot(x,y) {
    this.x = x;
    this.y = y;
    this.draw = function () { console.log('Drawing...') }
}

let dot = { z: 7 }
//Dot.call(dot, 1, 2)
Dot.apply(dot, [1, 2])
console.log(dot)

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.draw = function () { console.log('Drawing...') }
// `)


// const p = new Point(1, 2)
// console.log(p)