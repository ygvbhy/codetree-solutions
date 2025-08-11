const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

const print = (n) => {
    let str = ""
    let num = 0;
    for (let i = 0; i < n; i++) {
        str = ""
        for(let j = 0; j < n; j++) {
            if (num === 9) {
                num = 1
            } else num++
            str += num + " ";
        }
        console.log(str)
    }
}

print(N)