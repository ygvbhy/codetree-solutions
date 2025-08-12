const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const solution = (a, b) => {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0) {
            cnt += 1;
            continue
        }
        if (checkThree(i)){
            cnt += 1;
            continue
        }
    }
    return cnt
}

const checkThree = (n) => {
    const num = n.toString().split("")
    for (const i of num) {
        if (i === "3") return true
        else if (i === "6") return true
        else if (i === "9") return true
    }

    return false
}

console.log(solution(A, B))