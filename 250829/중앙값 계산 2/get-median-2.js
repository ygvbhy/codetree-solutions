const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const f = () => {
    const arr1 = []
    let s = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i])
        if (arr1.length % 2 === 1) {
            let n = 0;
            arr1.sort((a, b) => a - b)
            if (arr1.length !== 1) n = Math.floor(arr1.length / 2)
            s.push(arr1[n])
        }
    }

    return s
}

console.log(f().join(" "))