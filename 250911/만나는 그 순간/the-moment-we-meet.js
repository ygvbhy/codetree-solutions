const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
let aPos = 0, bPos = 0
const aPlan = [], bPlan = []

for (const [d, t] of movesA) {
    const dir = d === 'L' ? -1 : 1;
    for (let i = 0; i < t; i++) aPlan.push(dir)
}

for (const [d, t] of movesB) {
    const dir = d === 'L' ? -1 : 1;
    for (let i = 0; i < t; i++) bPlan.push(dir)
}

const maxTime = Math.max(aPlan.length, bPlan.length)

for (let time = 1; time <= maxTime; time++) {
    if (time <= aPlan.length) aPos += aPlan[time - 1]
    if (time <= bPlan.length) bPos += bPlan[time - 1]

    if (aPos === bPos) {
        console.log(time)
        return;
    }
}

console.log(-1)