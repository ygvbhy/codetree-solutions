const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

const ft = 30.48

console.log((a * ft).toFixed(1))