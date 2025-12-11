const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

while(N > 0) {
    console.log("*")
    N--
}