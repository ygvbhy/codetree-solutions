const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
let a1 = input[1];
let b1 = input[2];

const answer = a1.replace(b1) === a1 ? 'No' : "Yes"

console.log(answer)