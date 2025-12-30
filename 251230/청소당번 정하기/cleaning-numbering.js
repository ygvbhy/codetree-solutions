const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let classroom = 0;
let corridor = 0;
let restroom = 0;

for (let day = 1; day <= n; day++) {
      if (day % 12 === 0) {
      restroom++;
    } else if (day % 3 === 0) {
      corridor++;
    } else if (day % 2 === 0) {
      classroom++;
    }
}

console.log(classroom, corridor, restroom)