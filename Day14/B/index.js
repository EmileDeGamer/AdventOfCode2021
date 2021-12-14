const fs = require('fs')

let input = fs.readFileSync('./test.txt', ('utf-8')).split('\r\n')

let start = input[0].split("")

input.shift()
input.shift()

let matches = {}

input.map(line => {
    let splitted = line.split(" -> ")
    matches[splitted[0]] = splitted[1]
})

let lastChar = ""

let data = {}

for (let i = 0; i < start.length; i++) {
    if(i == start.length - 1 && start.length % 2 == 0){
        lastChar = start[i]
        break
    }
    let pair = start[i] + start[i + 1]
    let key1 = pair[0] + matches[pair]
    if(!data[key1]){
        data[key1] = 0
    }
    data[key1]++
    // let key2 = matches[pair] + pair[1]
    // console.log(pair, key1)
    // console.log(matches[pair])
    // let key1 = pair[0] + matches[pair]
    // let key2 = matches[pair] + pair[1]
    // if(!data[key1]){
    //     data[key1] = 0
    // }
    // data[key1]++
    // if(!data[key2]){
    //     data[key2] = 0
    // }
    // data[key2]++
}

for (let cycle = 0; cycle < 1; cycle++) {
    
    

    

    Object.keys(data).map(key => {
        // console.log(key)
        console.log(matches[key])
        
        // console.log(key[0])
    })
    console.log(data)
    // let result = []

    
    // for (let i = 0; i < start.length; i++) {
    //     let arr = []
    //     for (let j = 0; j < start[i].length; j++) {
    //         if(arr.length > 100000){
    //             result.push(arr)
    //             arr = []
    //         }
    //         if(j == start[i].length - 1){
    //             arr.push(start[i][j])
    //             // result.push(arr)
    //             break
    //         }
    //         let pair = start[i][j] + start[i][j + 1]
    //         arr.push(start[i][j])
    //         arr.push(matches[pair])
    //     }
    //     result.push(arr)
        
    //     // console.log(start[i])
    //     // let wholeKey = pair[0] + matches[pair]// + pair[1]
    //     // if(!data[wholeKey]){
    //     //     data[wholeKey] = 0
    //     // }
    //     // data[wholeKey]++
        
    // }

    // start = result
    
    // console.log(result)

    // console.log(`cycle ${cycle + 1}`)
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


// let str = ""

// Object.keys(data).map(key => {
//     console.log(key)
//     str += key
// })

// console.log(str)

// console.log(data)
// console.log(matches)