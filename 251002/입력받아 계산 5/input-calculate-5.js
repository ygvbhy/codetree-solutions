const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[0].split(" ").map(Number)

console.log(arr[0] + arr[1]);
