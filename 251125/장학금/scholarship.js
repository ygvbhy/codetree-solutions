const fs = require("fs");
let [m, f] = fs.readFileSync(0).toString().split(" ").map(Number);

if (m >= 90) {
    if (f >= 95) console.log(100000)
    else if (f >= 90) console.log(50000)
    else console.log(0)
}
else console.log(0)