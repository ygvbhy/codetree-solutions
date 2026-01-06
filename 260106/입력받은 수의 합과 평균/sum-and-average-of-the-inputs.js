const fs = require("fs");
let [N, ...list] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const sum = list.reduce((acc, cur) => cur += acc, 0);
console.log(sum, (sum / N).toFixed(1));
