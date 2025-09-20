const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [xs, cs] = input[i].split(' ');
  const x = Number(xs);
  const w = cs === 'G' ? 1 : 2;
  people.push({ x, w });
}

// Please Write your code here.
people.sort((a, b) => a.x - b.x);

let ans = 0;
let sum = 0;
let l = 0;

for (let r = 0; r < n; r++) {
    sum += people[r].w;

    while(people[r].x - people[l].x > k) {
        sum -= people[l].w;
        l++
    }

    if (sum > ans) ans = sum;
}

console.log(ans)