const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.

class Address {
    constructor(name, state, city) {
        this.name = name
        this.state = state
        this.city = city
    }
}

const addressList = []

for (let i = 0; i < personLines.length; i++) {
    const [name, state, city] = personLines[i].split(' ')
    addressList.push(new Address(name, state, city))
}

addressList.sort((a, b) => b.name.localeCompare(a.name))

const answer = addressList[0]

console.log(`name ${answer.name}`)
console.log(`addr ${answer.state}`)
console.log(`city ${answer.city}`)
