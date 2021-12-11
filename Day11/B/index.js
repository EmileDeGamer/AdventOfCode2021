const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(line => line.split(""))

let flashes = 0
let step = 0

while(flashes !== 100){
    flashes = 0
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
    step++
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

console.log(step)