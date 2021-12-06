const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split(",").map(Number)

for (let i = 0; i < 80; i++) {
    for (let x = 0; x < input.length; x++) {
        if(input[x] == 0){
            input.push(9)
        }
        input[x]--
        if(input[x] == -1){
            input[x] = 6
        }
    }
}

console.log(input.length)