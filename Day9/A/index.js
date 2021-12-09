const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

input.map(line => input[input.indexOf(line)] = line.split('').map(Number))

let count = 0

for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
        let self = input[y][x]
        let left = input[y][x - 1] !== undefined ? input[y][x - 1] : 1000
        let right = input[y][x + 1] !== undefined ? input[y][x + 1] : 1000
        let up = input[y - 1] !== undefined ? input[y - 1][x] : 1000
        let down = input[y + 1] !== undefined ? input[y + 1][x] : 1000
        if(self < left && self < right && self < up && self < down) {
            count += self + 1
        }
    }
}

console.log(count)