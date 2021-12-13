const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')
let folds = []
let coords = []

let map = []

for (let i = 0; i < input.indexOf(""); i++) {
    coords.push(input[i].split(","))
}

let xs = []
let ys = []

coords.map(coord => {
    xs.push(coord[0])
    ys.push(coord[1])
})

xs.sort((a, b) => a - b)
ys.sort((a, b) => a - b)

for (let i = input.indexOf("") + 1; i < input.length; i++) {
    folds.push(input[i])
}

for (let y = 0; y <= ys[ys.length - 1]; y++) {
    map.push([])
    for (let x = 0; x <= xs[xs.length - 1]; x++) {
        map[y][x] = '.'
    }
}

coords.map(coord => {
    map[coord[1]][coord[0]] = '#'
})

folds.map(fold => {
    if(folds.indexOf(fold) > 0){
        return
    }
    fold = fold.split("fold along ")[1].split("=")
    fold[1] = parseInt(fold[1])
    if(fold[0] == "x"){
        for (let y = 0; y < map.length; y++) {
            for (let x = Math.ceil(map[y].length / 2); x < map[y].length; x++) {
                if(x > fold[1]){
                    if(map[y][x] == '#'){
                        map[y][map[y].length - 1 - x] = "#"
                    }
                }
            }
        }
        for (let y = 0; y < map.length; y++) {
            map[y].splice(fold[1], map[y].length - 1)
        }
    }
    if(fold[0] == "y"){
        let otherHalf = map.splice(fold[1], map.length)
        otherHalf.splice(0, 1)
        for (let y = otherHalf.length - 1; y > 0; y--) {
            for (let x = 0; x < otherHalf[y].length; x++) {
                if(otherHalf[y][x] == "#"){
                    map[map.length - 1 - y][x] = "#"
                }
            }
        }
    }
})

let data = ""
let count = 0

map.map(row => {
    data += row.join("") + "\n"
    row.map(cell => {
        if(cell == "#"){
            count++
        }
    })
})

console.log(count)

fs.writeFileSync("output.txt", data)