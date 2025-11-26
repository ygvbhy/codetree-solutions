const fs = require("fs");
let Y = fs.readFileSync(0).toString().trim();

if (Y % 4 === 0) {
    console.log(Y % 100 === 0 && Y % 400 !== 0 ? false : true)
    return
}
console.log(false)