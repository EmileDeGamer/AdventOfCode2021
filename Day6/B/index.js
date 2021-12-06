const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split(",").map(Number).sort((a, b) => a - b)
let counter = {}

for (let i = 0; i < 9; i++) {
   counter[i] = 0
}

input.map(number => {
    counter[number]++
})

for (let day = 0; day < 256; day++) {
    let newCounter = {}
    for (let i = 0; i < 9; i++) {
        newCounter[i] = 0
    }
    Object.keys(counter).map(key => {
        let value = counter[key]
        if(key > 0){
            newCounter[key - 1] += value
        }
        else{
            newCounter[6] += value
            newCounter[8] += value
        }
    })
    counter = newCounter
}

let amount = 0

Object.values(counter).map(value => {
    amount += value
})

console.log(amount)