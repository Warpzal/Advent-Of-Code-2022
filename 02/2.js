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

const getOptimalChoice = (opponentChoice, result) => {
    switch (result) {
        case 'X':
            switch (opponentChoice) {
                case 'Paper':
                    return 'Rock'
                case 'Scissors':
                    return 'Paper'
                case 'Rock':
                    return 'Scissors'
            }
            break

        case 'Y':
            return opponentChoice

        case 'Z':
            switch (opponentChoice) {
                case 'Paper':
                    return 'Scissors'
                case 'Scissors':
                    return 'Rock'
                case 'Rock':
                    return 'Paper'
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
    if (outcome === 'Lost') return 0
    if (outcome === 'Draw') return 3
    if (outcome === 'Won') return 6
    return 0
}

const getOutcome = (char) => {
    if (char === 'X') return 'Lost'
    if (char === 'Y') return 'Draw'
    if (char === 'Z') return 'Won'
    return ''
}

let myPoints = 0
input.forEach((line) => {
    let [opponentChoice, result] = line.split(' ')
    opponentChoice = getOption(opponentChoice)
    const myChoice = getOptimalChoice(opponentChoice, result)

    myPoints += getPointsForChoice(myChoice)
    myPoints += getPointsForOutcome(getOutcome(result))
})
console.log(myPoints)
