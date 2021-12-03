const fs = require('fs')

let input = fs.readFileSync('./test.txt', ('utf-8')).split('\r\n')
console.log(input)
// let data = []
// let gamma = ""
// let epsilon = ""

// for (let i = 0; i < input[0].length; i++) {
//     data.push([])
// }

// input.map(line => {
//     line = line.split('')
//     for (let i = 0; i < line.length; i++) {
//         data[i].push(line[i])
//     }
// })

// let highestCounters = []

// data.map(arr => {
//     let onesCount = 0
//     let zerosCount = 0
//     arr.map((number) => {
//         if(number == '0'){
//             zerosCount++
//         }
//         else{
//             onesCount++
//         }
//     })
//     if(onesCount == zerosCount){

//         // console.log(onesCount, zerosCount)
//         highestCounters.push(1)
//     }
//     else{
//         onesCount > zerosCount ? highestCounters.push(1) : highestCounters.push(0)
//     }
    
//     // gamma += onesCount > zerosCount ? '1' : '0'
//     // epsilon += zerosCount > onesCount ? '1' : '0'
// })

// let newData = []
// let newData2 = []
// for (let i = 0; i < input[0].length; i++) {
//     newData.push([])
//     newData2.push([])
// }


// for (let i = 0; i < input[0].length; i++) {
//     if(i == 0){
//         input.map(line => {
//             // line = line.split('')
//             if(highestCounters[i] == 1){
//                 if(line[i] == '1'){
//                     newData[i].push(line)
//                 }
//                 if(line[i] == '0'){
//                     newData2[i].push(line)
//                 }
//             }
//             else{
//                 if(line[i] == '0'){
//                     newData[i].push(line)
//                 }
//                 if(line[i] == '1'){
//                     newData2[i].push(line)
//                 }
//             }
//         })
//     }
//     else{
//         let onesCount = 0
//         let zerosCount = 0
//         newData[i - 1].map(arr => {
//             if(arr[i] == '0'){
//                 zerosCount++
//             }
//             else{
//                 onesCount++
//             }
//         })
//         if(onesCount == zerosCount){
//             highestCounters[i] = 1
//         }
//         else{
//             onesCount > zerosCount ? highestCounters[i] = 1 : highestCounters[i] = 0
//         }
//         newData[i-1].map(line => {
//             if(highestCounters[i] == 1){
//                 if(line[i] == '1'){
//                     newData[i].push(line)
//                     newData2[i].push(line)
//                 }
//             }
//             else{
//                 if(line[i] == '0'){
//                     newData[i].push(line)
//                 }
//             }
//         })
//         newData2[i-1].map(line => {
//             if(highestCounters[i] == 1){
//                 if(line[i] == '0'){
//                     newData2[i].push(line)
//                 }
//             }
//             if(highestCounters == 0){
//                 if(line[i] == '1'){
//                     newData2[i].push(line)
//                 }
//             }
//         })
//     }
// }

// for (let i = 0; i < highestCounters.length; i++) {
//     if(i == 0){
//         input.map(line => {
//             if(highestCounters[i] == 1){
//                 if(line[i] == '1'){
//                     newData[i].push(line)
//                 }
//             }
//             else{
//                 if(line[i] == '0'){
//                     newData[i].push(line)
//                 }
//             }
//         })
//     }
//     else{
//         newData[i-1].map(line => {
//             if(highestCounters[i] == 1){
//                 if(line[i] == '1'){
//                     newData[i].push(line)
//                 }
//             }
//             else{
//                 if(line[i] == '0'){
//                     newData[i].push(line)
//                 }
//             }
//         })
//     }
    
// }

// highestCounters.map(number => {
//     if(highestCounters[0] == 1){
//         if(line[0] == '1'){
//             newData[0].push(line)
//         }
//     }
//     else{
//         if(line[0] == '0'){
//             newData[0].push(line)
//         }
//     }
// })



// console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
// console.log(newData[newData.length - 1])
// console.log(newData2)
// console.log(newData2[newData2.length - 2])

// console.log(data)

// let gamma = ones.length > zeros.length ? "1" : "0"

// console.log(ones.length)
// console.log(zeros.length)