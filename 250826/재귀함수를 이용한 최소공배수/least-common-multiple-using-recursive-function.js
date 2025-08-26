const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.
const gcd = (a , b) => {
    a = BigInt(Math.abs(Number(a)))
    b = BigInt(Math.abs(Number(b)));
    while(b !== 0n) [a, b] = [b, a % b];
    return a;
}

const lcm = (a, b) => {
    a = BigInt(a)
    b = BigInt(b)
    if (a === 0n || b === 0n) return 0n
    return (a / gcd(a, b) * b < 0n) ? -((a / gcd(a, b) * b)) : (a / gcd(a, b)) * b
}

const lcmAll = (arr) => arr.reduce((acc, x) => lcm(acc, x), 1n);

console.log(String(lcmAll(numbers)));