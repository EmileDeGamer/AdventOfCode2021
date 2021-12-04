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

drawableNumbers.map(number => {
    drawedNumbers.push(number)
    boards.map(board => {
        for (let x = 0; x < board[0].length; x++) {
            let count = 0
            for (let y = 0; y < board.length; y++) {
                if(board[y][x] == "X") count++
            }
            if(count == board.length){
                let sum = 0
                copyOfBoards[boards.indexOf(board)].map(line => {
                    line.map(number => {
                        if(drawedNumbers.indexOf(number) == -1){
                            sum += number
                        }
                    })
                })
                console.log(sum * number)
                throw Error('stop')
            }
        }
        board.map(line => {
            if(line.indexOf(number) > -1){
                line[line.indexOf(number)] = 'X'
                if(line.every(e => e == 'X')){
                    let winningBoard = copyOfBoards[boards.indexOf(board)]
                    let winningNumber = number
                    let sum = 0
                    winningBoard.map(line => {
                        line.map(number => {
                            if(drawedNumbers.indexOf(number) == -1) sum += number
                        })
                    })
                    console.log(sum * winningNumber)
                    throw Error('stop')
                }
            }
        })
        boards[boards.indexOf(board)] = board
    })
})