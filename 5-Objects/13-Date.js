const now = new Date();
console.log(now)

// Month Day Year
const date = new Date('December 11 1986 14:15 GMT-0300');
console.log(date)

const date2 = new Date(1986, 11, 25, 14, 15);
// new GMT
const date3 = new Date(1986, 11, 25, 14+15, 15);
console.log(date2)
console.log(date3)

// different formats
console.log('datestring', date3.toDateString());
console.log('isostring', date3.toISOString()); // better option to send dates to server
console.log('timestring', date3.toTimeString());


date3.getDate()