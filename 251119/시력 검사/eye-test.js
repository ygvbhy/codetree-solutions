const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

if (a >= 1 && b >= 1) console.log('High');
else if (a >= 0.5 && b >= 0.5) console.log('Middle');
else console.log("Low");
