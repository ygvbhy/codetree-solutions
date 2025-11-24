const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();


if (a % 13 === 0 || a % 19 === 0) console.log('True')
else console.log('False')