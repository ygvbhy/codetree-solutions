const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.
students.sort((a, b) => a.name.localeCompare(b.name))
console.log("name")
for (let s of students) {
    console.log(s.name, s.height, s.weight.toFixed(1))
}
console.log("")
students.sort((a, b) => b.height - a.height)
console.log("height")
for (let s of students) {
    console.log(s.name, s.height, s.weight.toFixed(1))
}