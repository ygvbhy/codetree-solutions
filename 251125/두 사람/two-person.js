const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split('\n')
let [aAge, aSex] = a.split(' ');
let [bAge, bSex] = b.split(' ');

if (+aAge >= 19 && aSex === 'M') console.log('1');
else if (+bAge >= 19 && bSex === 'M') console.log('1');
else console.log(0)