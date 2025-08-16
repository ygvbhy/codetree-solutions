const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

// const solution = () => {
//     let [a, b] = input[0].split(" ")
//     return [b, a].join(" ")
// }

// console.log(solution())

console.log(`${m} ${n}`)