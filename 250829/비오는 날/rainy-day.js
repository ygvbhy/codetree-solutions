const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.
forecasts.sort((a, b) => new Date(a[0]) - new Date(b[0]))
for (let i = 0; i < forecasts.length; i++) {
    if (forecasts[i][2] === 'Rain') {
        console.log(forecasts[i].join(' '))
        break;
    }
}