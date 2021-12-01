const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(Number)

let increasements = 0

for (let i = 0; i < input.length; i++) {
    let sum1 = input[i] + input[i + 1] + input[i + 2]
    let sum2 = input[i + 1] + input[i + 2] + input[i + 3]
    if(sum2 > sum1) {
        increasements++
    }
}

console.log(increasements)