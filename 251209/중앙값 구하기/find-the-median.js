const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

arr.sort((a, b) => a - b);
console.log(arr[1]);