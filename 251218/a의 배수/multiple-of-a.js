const fs = require("fs");
let [N, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let i = 1;
while(i <= N) {
    console.log(i % a === 0 ? 1 : 0)
    i++;
}