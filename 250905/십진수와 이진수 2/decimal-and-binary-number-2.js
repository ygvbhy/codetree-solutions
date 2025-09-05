const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here.
console.log((parseInt(binaryInput, 2) * 17).toString(2))