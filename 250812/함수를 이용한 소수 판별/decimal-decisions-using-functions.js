const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const solution = (a, b) => {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        cnt += isPrime(i)
    }

    return cnt
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return 0;
    }

    return n;
}

console.log(solution(A, B))
