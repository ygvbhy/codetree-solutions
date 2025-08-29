const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Boom {
    constructor(code, color, time) {
        this.code = code
        this.color = color
        this.time = time
    }

    printInfo() {
        console.log(`code : ${this.code}`)
        console.log(`color : ${this.color}`)
        console.log(`second : ${this.time}`)
    }
}

const boom = new Boom(u_code, l_color, time)
boom.printInfo()