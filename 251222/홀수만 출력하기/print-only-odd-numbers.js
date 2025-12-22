const fs = require("fs");
let [N, ...list] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 2 === 1) console.log(list[i])
}

