const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(BigInt);

const S = 10n ** 20n;
let sign = (A < 0n) !== (B < 0n);
A = A < 0n ? -A : A;
B = B < 0n ? -B : B;

let q = (A * S) / B, r = (A * S) % B;
if (sign && r) q++;

const v = sign ? -q : q;
const a = v < 0n ? -v : v;

console.log(
  (v < 0n ? "-" : "") +
  a / S + "." + (a % S).toString().padStart(20, "0")
);