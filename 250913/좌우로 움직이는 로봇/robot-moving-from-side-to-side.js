const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.
const a = [0], b = [0]

function move (arr1, moveArr) {
    for (const q of moveArr) {
        const [s, r] = q.split(" ")
        for (let i = 0; i < Number(s); i++) {
            if (r === 'R') arr1.push(arr1[arr1.length - 1] + 1)
            else if (r === 'L') arr1.push(arr1[arr1.length - 1] - 1)
        }
    }
}

move(a, movesA)
move(b, movesB)

let count = 0, prev = false;
while (a.length < b.length) {
  a.push(a[a.length - 1]);
}

while (b.length < a.length) {
  b.push(b[b.length - 1]);
}

for (let i = 1; i < a.length; i++) {
    prev = a[i - 1] === b[i - 1]
    const same = a[i] === b[i]

    if (same && !prev) {
        count++;
    }
}

console.log(count)