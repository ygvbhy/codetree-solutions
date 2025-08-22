const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
let sum = 0;
const f = (n) => {
    if (n === 0) return

    sum += n % 10
    return f(parseInt(n / 10))
}

f(a * b * c)
console.log(sum)