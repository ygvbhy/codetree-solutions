const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.
const reverse = str.split("").reverse().join("");
str === reverse ? console.log("Yes") : console.log("No")