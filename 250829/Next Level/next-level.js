const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class User {
    constructor(id = 'codetree', level = '10') {
        this.user_id = id
        this.level = level
    }

    write() {
        console.log(`user ${this.user_id} lv ${this.level}`)
    }
}

const user_1 = new User()
const user_2 = new User(user_id, levelStr)
user_1.write()
user_2.write()