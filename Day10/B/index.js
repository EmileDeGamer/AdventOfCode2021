const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(line => line.split(""))
let newInput = []

let valids = {"(": ")", "[": "]", "{": "}", "<": ">"}

for (let z = 0; z < input.length; z++) {
    let line = input[z]
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
    if(indexes[0] == Infinity) {
        newInput.push(input[z])
    }
}

let amountios = []

let worths = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4
}

newInput.map(line => {
    let amount = 0
    let amounts = {}

    Object.keys(valids).map(key => {
        let value = valids[key]
        amounts[key] = 0
        amounts[value] = 0
    })
    let order = []
    let start 
    if(line.length % 2 == 0){
        start = Math.floor(line.length / 2)
    }
    else{
        start = Math.floor(line.length / 2) - 1
    }
    for (let i = line.length - 1; i >= 0; i--) {
        order.push(valids[line[i]])
    }
    order.map(char => {
        amount *= 5 
        amount += worths[char]
    })
    amountios.push(amount)
})

amountios.sort((a, b) => a - b)

console.log(amountios[Math.floor(amountios.length / 2)])