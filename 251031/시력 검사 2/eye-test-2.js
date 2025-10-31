const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if (a >= 1.0) console.log("High")
else if (a >= 0.5) console.log("Middle")
else console.log("Low")
