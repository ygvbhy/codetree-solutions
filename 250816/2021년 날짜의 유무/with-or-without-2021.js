const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

const solution = (m, d) => {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (m >= 13) return "No";
    if (d > month[m - 1]) return "No";

    return "Yes"
}

console.log(solution(m, d))