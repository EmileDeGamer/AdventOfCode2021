const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

let x = 0
let y = 0
let aim = 0

input.map(string => {
    let number = parseInt(string.split(" ")[1])
    let type = string.split(" ")[0]
    switch (type) {
        case "forward":
            x += number
            y += aim * number
            break;
        case "down":
            aim += number
            break;
        case "up":
            aim -= number
            break;
        default:
            break;
    }
})

console.log(x  *y)