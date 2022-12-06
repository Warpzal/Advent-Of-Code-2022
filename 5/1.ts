const { readFileSync } = require('fs')

const stackInput = readFileSync('./stacks.txt', 'utf-8').split('\n')
const instructionInput = readFileSync('./input.txt', 'utf-8').split('\n')

let stacks: string[][] = [
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

const parseInstruction = (line: string): number[] => {
    const regex: RegExp = /(\d+).+(\d+).+(\d+)/
    const instruction: RegExpMatchArray | [] = line.match(regex) || []
    instruction.shift()
    return instruction?.map((num) => +num) || []
}

const executeInstruction = (values: number[]): void => {
    let move: number = values[0]
    const from: number = values[1] - 1
    const to: number = values[2] - 1
    const newStack: string[] = []

    for (let i = 0; i < move; i++) {
        newStack.unshift(stacks[from].shift() || '#')
    }

    for (let i = 0; i < move; i++) {
        stacks[to].unshift(newStack.shift() || '#')
    }
}

const fetchTopOfStacks = (): string => {
    return stacks.reduce((acc, arr) => acc + arr[0], '')
}

instructionInput.forEach((line) => {
    executeInstruction(parseInstruction(line) || [0, 0, 0])
})

console.log(fetchTopOfStacks())
