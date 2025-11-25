const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split('\n');
let [am, ae] = a.split(' ').map(Number);
let [bm, be] = b.split(' ').map(Number);

if (am > bm) {
    console.log('A');
    return
}
else if (am < bm) { 
    console.log('B');
    return
}

if (ae > be) console.log('A');
else console.log('B')

