const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
if (a.length === 1) console.log(0)
else {
    const numList = new Set(...[a.split('')])
    const num = a.split('')
    if (numList.size === 2) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] === '0') {
                num[i] = '1'
                break;
            }
        }
    } else {
        for (let i = num.length; i >= 0; i--) {
            if (num[i] === '1') {
                num[i] = '0'
                break;
            }
        }
    }
    console.log(parseInt(num.join(''), 2))
}