const fs = require("fs");
let [m, e] = fs.readFileSync(0).toString().split('\n')
let [am, ae] = m.split(' ').map(Number);
let [bm, be] = e.split(' ').map(Number);

if (am > bm && ae > be) console.log(1)
else console.log(0)

