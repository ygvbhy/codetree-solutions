const fs = require("fs");
let [N, ...a] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

console.log(a.filter(n => n % 2 === 1 && n % 3 === 0).reduce((acc, cur) => acc += cur, 0));
