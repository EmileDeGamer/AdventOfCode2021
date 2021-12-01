const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(Number)

let increasements = 0

for (let i = 0; i < input.length; i++) {
    if(input[i] > input[i - 1]) {
        increasements++
    }
}

console.log(increasements)