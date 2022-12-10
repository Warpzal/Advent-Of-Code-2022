import { readFileSync } from 'fs'

const input = readFileSync('./input.txt', 'utf-8').split('\n')

const parseLine = ([a, b]: string[]): [string, number] => [a, +b]

let signalStrength = 0
let cycle: number = 0
let x: number = 1

const isSpecialCycle = (cycle: number): boolean => {
    const cycles = [20, 60, 100, 140, 180, 220]
    if (cycles.some((val) => val === cycle)) return true
    return false
}

input.forEach((line) => {
    const [instruction, value] = parseLine(line.split(' '))
    if (instruction === 'noop') {
        cycle++
        if (isSpecialCycle(cycle)) signalStrength += cycle * x
        return
    }
    if (instruction === 'addx') {
        cycle++
        if (isSpecialCycle(cycle)) {
            console.log(cycle, x)
            signalStrength += cycle * x
        }
        cycle++
        if (isSpecialCycle(cycle)) {
            console.log(cycle, x)
            signalStrength += cycle * x
        }
        x += value
    }
})

console.log(signalStrength)
