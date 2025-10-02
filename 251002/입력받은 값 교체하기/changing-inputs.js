const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[0].split(" ")

console.log(arr[1], arr[0])
