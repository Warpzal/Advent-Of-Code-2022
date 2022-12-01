const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n\n')
let elves = []
for (const calories of input) {
    elves.push(
        calories
            .split('\n')
            .map((num) => +num)
            .reduce((acc, sum) => acc + sum, 0)
    )
}
console.log(Math.max(...elves))
