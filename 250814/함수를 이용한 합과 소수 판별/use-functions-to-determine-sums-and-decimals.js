const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

const solution = (a, b) => {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            let sum = i.toString().split("").map(Number).reduce((acc, cur) => acc += cur, 0);
            if (sum % 2 === 0) cnt++;
        }
    }
    return cnt;
}

console.log(solution(A, B))