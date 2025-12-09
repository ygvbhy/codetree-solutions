const fs = require("fs");
let N = fs.readFileSync(0).toString().trim().split('\n')

const result = [0, 0, 0, 0]
N.map(n => {
    const [q, c] = n.split(' ');
    if (+c >= 37 && q === 'Y') {
        result[0]++
    } else if (+c >= 37 && q === 'N') {
        result[1]++
    } else if (+c < 37 && q === 'Y') {
        result[2]++
    } else result[3]++
})

if (result[0] >= 2) console.log('E');
else console.log('N')

