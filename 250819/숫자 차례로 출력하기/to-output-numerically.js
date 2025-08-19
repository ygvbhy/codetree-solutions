const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

const up = (i, str) => {
    if (n + 1 === i) {
        console.log(str.trim())
        return;
    }

    str += ` ${i}`

    return up(i + 1, str)
}

const down = (i, str) => {
    if (i === 0) {
        console.log(str.trim())
        return;
    }

    str += ` ${i}`

    return down(i - 1, str)
}

up(1, "")
down(n, "")