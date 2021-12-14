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
    // let key2 = pair[1] + matches[pair]
    // data.push(key1)
    if(!data[key1]){
        data[key1] = []
    }
    data[key1].push(i)
    // if(!data[key2]){
    //     data[key2] = 0
    // }
    // data[key1]++
    // data[key2]++
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

console.log(data)

for (let cycle = 0; cycle < 1; cycle++) {
    
    // console.log(data)
    let tData = {}
    let amount = 0
    for (let i = 0; i < Object.keys(data).length; i++) {
        let pair = data[i]
        let key1 = pair[0] + matches[pair]
        let key2
        if(i + 1 < data.length){
            let pair2 = pair[1] + data[i + 1][0]
            key2 = pair[1] + matches[pair2]
        }
        else{
            let pair2 = pair[1] + lastChar
            key2 = pair[1] + matches[pair2]
        }
        if(!tData[key1]){
            tData[key1] = []
        }
        if(!tData[key2]){
            tData[key2] = []
        }
        tData[key1].push(amount)
        amount++
        tData[key2].push(amount)
        amount++
        // tData.push(key1)
        // tData.push(key2)
        // console.log(key1, key2)
    }

    // data = tData
    // data.map(pair => {
    //     let key1 = pair[0] + matches[pair]
    //     let key2 = pair[1]
    //     console.log(key1, key2)
    //     if(!tData[key1]){
    //         tData[key1] = 0
    //     }
    //     tData[key1]++
    // })

    // console.log(tData)

    // data = tData
    
    // data = tData
    // console.log(tData)

    // Object.keys(data).map(key => {
    //     // console.log(key)
    //     console.log(matches[key])
        
    //     // console.log(key[0])
    // })
    // console.log(data)
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

data.map(pair => {
    pair.split("").map(char => {
        if(!counter[char]){
            counter[char] = 0
        }
        counter[char]++
    })
    
})

counter[lastChar]++

let values = Object.values(counter).sort((a, b) => a - b)

console.log(values[values.length - 1] - values[0])

// console.log(counter)

// let str = ""

// Object.keys(data).map(key => {
//     console.log(key)
//     str += key
// })

// console.log(str)

// console.log(data)
// console.log(matches)