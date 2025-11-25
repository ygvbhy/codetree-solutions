const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

if (N >= 3 && N <= 5) console.log("Spring");
else if (N >= 6 && N <= 8) console.log("Summer");
else if (N >= 9 && N <= 11) console.log("Fall");
else console.log("Winter")