const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.

class Student {
    constructor(user, score) {
        this.user = user
        this.score = score
    }
}

const allStudent = []

for (let i = 0; i < scores.length; i++) {
    allStudent.push(new Student(codenames[i], scores[i]))
}

allStudent.sort((a, b) => a.score - b.score)
console.log(allStudent[0].user + " " + allStudent[0].score)