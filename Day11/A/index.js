const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(line => line.split(""))

let flashes = 0

for (let i = 0; i < 100; i++) { 
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            input[y][x]++
            if(input[y][x] == 10){
                hitEverythingInRange(y, x)
            }
        }
    }
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if(input[y][x] > 9){
                input[y][x] = 0
                flashes++
            }
        }
    }
}

function hitEverythingInRange(y, x){
    if(input[y][x+1] !== undefined){
        input[y][x + 1]++
        if(input[y][x + 1] == 10){
            hitEverythingInRange(y, x + 1)
        }
    }
    if(input[y][x-1] !== undefined){
        input[y][x - 1]++
        if(input[y][x - 1] == 10){
            hitEverythingInRange(y, x - 1)
        }
    }
    if(input[y+1] !== undefined){
        input[y+1][x]++
        if(input[y + 1][x] == 10){
            hitEverythingInRange(y + 1, x)
        }
        if(input[y+1][x+1] !== undefined){
            input[y + 1][x + 1]++
            if(input[y + 1][x + 1] == 10){
                hitEverythingInRange(y + 1, x + 1)
            }
        }
        if(input[y+1][x-1] !== undefined){
            input[y + 1][x - 1]++
            if(input[y + 1][x - 1] == 10){
                hitEverythingInRange(y + 1, x - 1)
            }
        }
    }
    if(input[y-1] !== undefined){
        input[y - 1][x]++
        if(input[y - 1][x] == 10){
            hitEverythingInRange(y - 1, x)
        }
        if(input[y-1][x+1] !== undefined){
            input[y - 1][x + 1]++
            if(input[y - 1][x + 1] == 10){
                hitEverythingInRange(y - 1, x + 1)
            }
        }
        if(input[y-1][x-1] !== undefined){
            input[y - 1][x - 1]++
            if(input[y - 1][x - 1] == 10){
                hitEverythingInRange(y - 1, x - 1)
            }
        }
    }
}

console.log(flashes)