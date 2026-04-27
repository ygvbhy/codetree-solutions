declare const require: any;
const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

for (let i = 1; i <= N; i++) {
    console.log("* ".repeat(i));
}
