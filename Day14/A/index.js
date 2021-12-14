const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

let start = input[0].split("")

input.shift()
input.shift()

let matches = {}

input.map(line => {
    let splitted = line.split(" -> ")
    matches[splitted[0]] = splitted[1]
})

for (let i = 0; i < 10; i++) {
    let result = []

    for (let i = 0; i < start.length; i++) {
        if(i == start.length - 1){
            result.push(start[i])
            break
        }
        let pair = start[i] + start[i + 1]
        result.push(start[i])
        result.push(matches[pair])
    }
    start = result
}

let counter = {}

start.map(char => {
    if(!counter[char]){
        counter[char] = 0
    }
    counter[char]++
})

let values = Object.values(counter).sort((a, b) => a - b)

console.log(values[values.length - 1] - values[0])