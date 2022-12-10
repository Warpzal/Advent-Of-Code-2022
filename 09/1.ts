import { readFileSync } from 'fs'

const input: string[] = readFileSync('./input.txt', 'utf-8').split('\n')

input.forEach((instruction: string) => {
    const parse = ([a, b]: string[]) => [a, +b]
    const [direction, amount] = parse(instruction.split(' '))
})
