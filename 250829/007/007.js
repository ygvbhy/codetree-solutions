const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.
console.log("secret code : " + s_code)
console.log("meeting point : " + m_point)
console.log("time : " + time)