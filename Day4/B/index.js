const fs = require('fs')

let input = fs.readFileSync('./input.txt', ('utf-8')).split('\r\n')
let drawableNumbers = input.shift().split(',').map(Number)
input.shift()
input.push('')
let boards = []
let copyOfBoards = []
let board = []
let copyBoard = []

input.map(line => {
    if(line == ""){
        boards.push(board)
        copyOfBoards.push(copyBoard)
        board = []
        copyBoard = []
    }
    else{
        board.push(line.trim().split(/\s+/g).map(Number))
        copyBoard.push(line.trim().split(/\s+/g).map(Number))
    }
})

let drawedNumbers = []
let wonIndexes = []

drawableNumbers.map(number => {
    if(wonIndexes.length == boards.length){
        let sum = 0
        boards[wonIndexes[wonIndexes.length - 1]].map(line => {
            line.map(n => { if(n != "X") sum += n })
        })
        console.log(sum * drawedNumbers[drawedNumbers.length - 1])
        throw Error('stop')
    }
    drawedNumbers.push(number)
    boards.map(board => {
        if(wonIndexes.indexOf(boards.indexOf(board)) > -1) return
        board.map(line => {
            if(line.indexOf(number) > -1){
                line[line.indexOf(number)] = 'X'
                if(line.every(e => e == 'X')){
                    line[line.indexOf(number)] = number
                    wonIndexes.push(boards.indexOf(board))
                }
            }
            board[board.indexOf(line)] = line
        })
        boards[boards.indexOf(board)] = board
        if(wonIndexes.indexOf(boards.indexOf(board)) > -1) return
        for (let x = 0; x < board[0].length; x++) {
            let count = 0
            for (let y = 0; y < board.length; y++) {
                if(board[y][x] == "X") count++
            }
            if(count == board.length) wonIndexes.push(boards.indexOf(board))
        }
    })
})