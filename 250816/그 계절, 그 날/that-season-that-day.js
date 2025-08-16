const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
const solution = (y, m, d) => {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const season = ["Winter", "Winter", "Spring", "Spring", "Spring", "Summer", "Summer", "Summer", "Fall", "Fall", "Fall", "Winter"]
    if (m === 2) {
        let check = false

        if (y % 4 === 0) {
            if (y % 100 !== 0) check = true
            else {
                if (y % 400 === 0) check = true
            }
        }

        if (check) month[1] = 29
    }

    if (month[m - 1] >= d) {
        return season[m - 1];
    }

    return -1
}

console.log(solution(year, month, day))