const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')
let data = []
let gamma = ""
let epsilon = ""

for (let i = 0; i < input[0].length; i++) {
    data.push([])
}

input.map(line => {
    line = line.split('')
    for (let i = 0; i < line.length; i++) {
        data[i].push(line[i])
    }
})

data.map(arr => {
    let onesCount = 0
    let zerosCount = 0
    arr.map((number) => {
        if(number == '0'){
            zerosCount++
        }
        else{
            onesCount++
        }
    })
    gamma += onesCount > zerosCount ? '1' : '0'
    epsilon += zerosCount > onesCount ? '1' : '0'
})

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))