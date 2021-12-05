const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

let maxX = 0
let maxY = 0

input.map(line => {
    line = line.split(' -> ')
    line = line.map(item => item = item.split(',').map(Number))
    line[0].map(number => {
        if(maxX < number) maxX = number
    })
    line[1].map(number => {
        if(maxY < number) maxY = number
    })
})

let map = []
for (let i = 0; i <= maxY; i++) {
    map.push(new Array(maxX+1).fill(0))
}

input.map(line => {
    line = line.split(' -> ')
    line = line.map(item => item = item.split(',').map(Number))
    let from = line[0]
    let to = line[1]
    let xMovements = to[0] - from[0]
    let yMovements = to[1] - from[1]
    for (let i = 0; i <= Math.max(Math.abs(xMovements), Math.abs(yMovements)); i++) {
        let x = from[0]
        let y = from[1]
        if(yMovements > 0) {
            y += i
        }
        else if(yMovements < 0){
            y -= i
        }
        if(xMovements > 0) {
            x += i
        }
        else if(xMovements < 0){
            x -= i
        }
        map[y][x]++
    }
})

let data = ""
let count = 0

map.map(line => {
    line.map(item => {
        if(item >= 2){
            count++
        }
    })
    data += line.join(' ') + '\n'
})

fs.writeFileSync("output.txt", data)

console.log(count)