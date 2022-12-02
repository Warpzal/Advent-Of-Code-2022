const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const getOption = (char) => {
    switch (char) {
        case 'A':
        case 'X':
            return 'Rock'
        case 'B':
        case 'Y':
            return 'Paper'
        case 'C':
        case 'Z':
            return 'Scissors'
    }
    return 'Failure'
}

const getOutcome = (opponentChoice, myChoice) => {
    switch (myChoice) {
        case 'Rock':
            switch (opponentChoice) {
                case 'Paper':
                    return 'lost'
                case 'Scissors':
                    return 'won'
                case 'Rock':
                    return 'draw'
            }
            break

        case 'Paper':
            switch (opponentChoice) {
                case 'Paper':
                    return 'draw'
                case 'Scissors':
                    return 'lost'
                case 'Rock':
                    return 'won'
            }
            break

        case 'Scissors':
            switch (opponentChoice) {
                case 'Paper':
                    return 'won'
                case 'Scissors':
                    return 'draw'
                case 'Rock':
                    return 'lost'
            }
            break
    }
}

const getPointsForChoice = (choice) => {
    if (choice === 'Rock') return 1
    if (choice === 'Paper') return 2
    if (choice === 'Scissors') return 3
    return 0
}

const getPointsForOutcome = (outcome) => {
    if (outcome === 'lost') return 0
    if (outcome === 'draw') return 3
    if (outcome === 'won') return 6
    return 0
}

let myPoints = 0
input.forEach((line) => {
    let [opponentChoice, myChoice] = line.split(' ')
    opponentChoice = getOption(opponentChoice)
    myChoice = getOption(myChoice)
    myPoints += getPointsForChoice(myChoice)
    myPoints += getPointsForOutcome(getOutcome(opponentChoice, myChoice))
})
console.log(myPoints)
