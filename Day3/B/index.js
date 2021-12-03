const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

input.map(line => { line = line.split('')})

let leftData = input, rightData = input

for (let x = 0; x < input[0].length; x++) {
    let arr = []
    let arr2 = []
    for (let y = 0; y < leftData.length; y++) { arr.push(leftData[y][x]) }
    for (let y = 0; y < rightData.length; y++) { arr2.push(rightData[y][x]) }
    let oneCount = 0
    let oneCount2 = 0
    arr.map(number => { if(number == '1') oneCount++ })
    arr2.map(number => { if(number == '1') oneCount2++ })
    let tLeftData = []
    let tRightData = []
    let rightSplitter = oneCount2 >= Math.round(rightData.length / 2) ? "0" : "1"
    rightData.filter(line => { if(line[x] == rightSplitter) return line }).map(line =>{ tRightData.push(line) })
    let leftSplitter = oneCount >= Math.round(leftData.length / 2) ? "1" : "0"
    leftData.filter(line => { if(line[x] == leftSplitter) return line }).map(line =>{ tLeftData.push(line) })
    if(tLeftData.length > 0) leftData = tLeftData
    if(tRightData.length > 0) rightData = tRightData
}

console.log(parseInt(leftData[0], 2) * parseInt(rightData[0], 2))