const fs = require('fs')
let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')

let numbers = {}
let counter = 0

input.map(line => {
    line = line.split(" | ")
    let possibilities = line[0].split(" ").sort((a, b) => a.length - b.length)
    possibilities.map(possibility => {
        possibility = possibility.split("")
        if(possibility.length == 2){
            numbers["1"] = possibility
        }
        else if(possibility.length == 3){
            numbers["7"] = possibility
        }
        else if(possibility.length == 4){
            numbers["4"] = possibility
        }
        else if(possibility.length == 5){
            if(numbers["1"].every(char => possibility.includes(char))){
                numbers["3"] = possibility
            }
        }
        else if(possibility.length == 6){
            if(!numbers["1"].every(char => possibility.includes(char))){
                numbers["6"] = possibility
            }
            if(numbers["1"].every(char => possibility.includes(char))){
                if(numbers["4"].every(char => possibility.includes(char))){
                    numbers["9"] = possibility
                }
                else{
                    numbers["0"] = possibility
                }
            } 
        }
        else if(possibility.length == 7){
            numbers["8"] = possibility
        }
    })
    possibilities.map(possibility => {
        possibility = possibility.split("")
        if(possibility.length == 5){
            if(!possibility.every(char => numbers["3"].includes(char))){
                if(!possibility.every(char => numbers["6"].includes(char))){
                    numbers["2"] = possibility
                }
                else{
                    numbers["5"] = possibility
                }
            }
            
        }
    })
    let combinations = line[1].split(" ")
    let number = ""
    combinations.map(combination => {
        let splittedCombination = combination.split("")
        Object.keys(numbers).find(key => {
            let value = numbers[key]
            if(splittedCombination.length == value.length){
                if(splittedCombination.every(char => value.includes(char))) {
                    return number += key
                }
            }
        })
        
    })
    counter += parseInt(number)
})

console.log(counter)