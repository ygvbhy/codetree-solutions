const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

const gcd = (a, b) => {
    while(b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(n, m));