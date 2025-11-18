const fs = require("fs");
let A = fs.readFileSync(0).toString().split('\n')[0]

if (+A >= 10 && +A <= 20) console.log('yes')
else console.log('no')