const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

const numbers = {
    1: ["c", "f"],
    4: ["b", "c", "d", "f"],
    7: ["a", "c", "f"],
    8: ["a", "b", "c", "d", "e", "f", "g"]
}

let counter = 0

input.map(line => {
    line = line.split(" | ")
    let combinations = line[1].split(" ")
    combinations.map(combination => {
        combination = combination.split("")
        Object.keys(numbers).map(key => {
            let value = numbers[key]
            if(combination.length == value.length) {
                counter++
            }
        })
    })
})

console.log(counter)