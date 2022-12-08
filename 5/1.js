var readFileSync = require('fs').readFileSync
var stackInput = readFileSync('./stacks.txt', 'utf-8').split('\n')
var instructionInput = readFileSync('./input.txt', 'utf-8').split('\n')
var stacks = [
    ['T', 'Z', 'B'],
    ['N', 'D', 'T', 'H', 'V'],
    ['D', 'M', 'F', 'B'],
    ['L', 'Q', 'V', 'W', 'G', 'J', 'T'],
    ['M', 'Q', 'F', 'V', 'P', 'G', 'D', 'W'],
    ['S', 'F', 'H', 'G', 'Q', 'Z', 'V'],
    ['W', 'C', 'T', 'L', 'R', 'N', 'S', 'Z'],
    ['M', 'R', 'N', 'J', 'D', 'W', 'H', 'Z'],
    ['S', 'D', 'F', 'L', 'Q', 'M'],
]
var parseInstruction = function (line) {
    var regex = /(\d+).+(\d+).+(\d+)/
    var instruction = line.match(regex) || []
    instruction.shift()
    return (
        (instruction === null || instruction === void 0
            ? void 0
            : instruction.map(function (num) {
                  return +num
              })) || []
    )
}
var executeInstruction = function (values) {
    var move = values[0]
    var from = values[1] - 1
    var to = values[2] - 1
    var newStack = []
    for (var i = 0; i < move; i++) {
        newStack.unshift(stacks[from].shift() || '#')
    }
    for (var i = 0; i < move; i++) {
        stacks[to].unshift(newStack.shift() || '#')
    }
}
var fetchTopOfStacks = function () {
    return stacks.reduce(function (acc, arr) {
        return acc + arr[0]
    }, '')
}
instructionInput.forEach(function (line) {
    executeInstruction(parseInstruction(line) || [0, 0, 0])
})
console.log(fetchTopOfStacks())
