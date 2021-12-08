const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split(",").map(Number).sort((a, b) => (a - b))

let entries = {}
for (let i = 1; i <= input[input.length - 1]; i++) {
    entries[i] = 0
    input.map(number => {
        for (let x = 1; x <= Math.abs(number - i); x++) {
            entries[i] += 1 * x
        }
    })
}

let lowestValue = Object.values(entries).sort((a, b) => (a - b))[0]

console.log(lowestValue)