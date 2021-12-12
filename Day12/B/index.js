const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n').map(line => line.split("-"))

let cache = {}
let paths = []

input.map(route => {
    if(!Object.keys(cache).includes(route[0])){
        cache[route[0]] = []
    }
    if(!Object.keys(cache).includes(route[1])){
        cache[route[1]] = []
    }
    cache[route[0]].push(route[1])
    cache[route[1]].push(route[0])
})

findNextCave("start", ["start"])

function findNextCave(start, path){
    let next = cache[start]
    
    next.map(char => {
        if(char !== char.toUpperCase()){
            if(char == "end" && path.includes("end") || char == "start" && path.includes("start")){
                return
            }
            let c = path.find(c => {
                if(c !== c.toUpperCase()){
                    let amount = getAmountOf(path.join(""), c)
                    if(amount == 2) return c
                }
            })
            if(c !== undefined && path.includes(char)){
                return
            }
        }
        if(char == "end"){
            paths.push(path.concat(char))
        }
        else{
            findNextCave(char, path.concat(char))
        }
    })
}

function getAmountOf(string, char){
    return string.match(new RegExp(char, 'g'))?.length
}

console.log(paths.length)