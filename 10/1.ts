import { readFileSync } from 'fs'

const input = readFileSync('./input.txt', 'utf-8').split('\n')

const parseLine = ([a, b]: string[]): [string, number] => [a, +b]

let signalStrength = 0
let cycle: number = 0
let x: number = 1

input.forEach((line) => {
    const [instruction, value] = parseLine(line.split(' '))
    if (instruction === 'noop') {
        cycle++
        if (cycle % 40 === 20) signalStrength += cycle * x
        return
    }
    if (instruction === 'addx') {
        cycle++
        if (cycle % 40 === 20) signalStrength += cycle * x
        cycle++
        if (cycle % 40 === 20) signalStrength += cycle * x
        x += value
    }
})

console.log(signalStrength)
