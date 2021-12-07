const fs = require('fs')
let input = fs.readFileSync('./sjaak.txt', ('utf-8')).split(",").map(Number).sort((a, b) => (a - b))
let entries = {}

for (let i = 1; i <= input[input.length - 1]; i++) {
    entries[i] = 0
    input.map(number => {
        entries[i] += Math.abs(number - i)
    })
}

let lowestValue = Object.values(entries).sort((a, b) => (a - b))[0]

console.log(lowestValue)