const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.
const arr = [2, 4]
const f = () => {
    for (let i = 2; i < N; i++) {
        arr.push((arr[i - 2] * arr[i - 1]) % 100)
    }
}

f()
console.log(arr[N - 1])