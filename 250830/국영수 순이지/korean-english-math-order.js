const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
const newStudent = rawStudentData.map(n => {
    const [name, kor, eng, math] = n.trim().split(" ")
    return {
        name,
        kor,
        eng,
        math
    }
})
newStudent.sort((a, b) => {
    if (a.kor !== b.kor) return +b.kor - +a.kor
    if (a.eng !== b.eng) return +b.eng - +a.eng
    if (a.math !== b.math) return +b.math - +a.math
    return a.name.localeCompare(b.name)
})

for (const s of newStudent) {
    console.log(s.name, s.kor, s.eng, s.math)
}