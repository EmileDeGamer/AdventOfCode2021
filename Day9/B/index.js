const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

input.map(line => input[input.indexOf(line)] = line.split('').map(Number))

let basins = []
let doneCoords = []

for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
        let self = input[y] !== undefined ? input[y][x] : undefined
        let left = input[y][x - 1] !== undefined ? input[y][x - 1] : 1000
        let right = input[y][x + 1] !== undefined ? input[y][x + 1] : 1000
        let up = input[y - 1] !== undefined ? input[y - 1][x] : 1000
        let down = input[y + 1] !== undefined ? input[y + 1][x] : 1000
        if(self < left && self < right && self < up && self < down) {
            basins.push([self])
            let index = basins.length - 1
            keepSearching(y - 1, x, index)
            keepSearching(y + 1, x, index)
            keepSearching(y, x - 1, index)
            keepSearching(y, x + 1, index)
        }
    }
}

function keepSearching(y, x, index){
    let exists = doneCoords.find(coord => {
        return coord[0] === y && coord[1] === x
    })
    if(exists !== undefined) {
        return
    }
    doneCoords.push([y, x])
    let self = input[y] !== undefined ? input[y][x] : undefined
    if(self !== undefined){
        if(self !== 9){
            basins[index].push(self)
            if(input[y] !== undefined){
                if(input[y][x - 1] !== undefined && input[y][x - 1] !== 9){
                    keepSearching(y, x - 1, index)
                }
                if(input[y][x + 1] !== undefined && input[y][x + 1] !== 9){
                    keepSearching(y, x + 1, index)
                }
            }
            if(input[y - 1] !== undefined){
                if(input[y - 1][x] !== undefined && input[y - 1][x] !== 9){
                    keepSearching(y - 1, x, index)
                }
            }
            if(input[y + 1] !== undefined){
                if(input[y + 1][x] !== undefined && input[y + 1][x] !== 9){
                    keepSearching(y + 1, x, index)
                }
            }   
        }
    }
}

basins.sort((a, b) => {
    return a.length - b.length
})

let count = basins[basins.length - 3].length - 1

for (let i = basins.length - 2; i < basins.length; i++) {
    count *= basins[i].length - 1
}

console.log(count)