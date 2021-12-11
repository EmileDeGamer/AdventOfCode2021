const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(line => line.split(""))

let valids = {"(": ")", "[": "]", "{": "}", "<": ">"}

let worths = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}

let count = 0

input.map(line => {
    for (let x = 0; x < line.length * 2 + 1; x++) { //hadn't enough cycles lmao
        for(let i = 0; i < line.length; i++){
            let key = Object.keys(valids)[Object.keys(valids).indexOf(line[i])]
            let value = valids[key]
            if(key !== undefined && value !== undefined && line[i + 1] == value){
                line.splice(i, 2)
            }
        }
    }
    let indexes = []
    Object.values(valids).map(value => {
        indexes.push(line.indexOf(value) > -1 ? line.indexOf(value) : Infinity)
    })
    indexes.sort((a, b) => a - b)
    let corruptedChar = line[indexes[0]]
    if(corruptedChar !== undefined) {
        count += worths[corruptedChar]
    }
})

console.log(count)