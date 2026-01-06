const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(A ** B)