import { readFileSync } from 'fs'

const input = readFileSync('./input.txt', 'utf-8').split('\n')

const SCREEN_HEIGHT = 6
const SCREEN_WIDTH = 40

let cycle = 0
let x = 1

const screen: string[][] = [...Array(SCREEN_HEIGHT)].map(() =>
    [...Array(SCREEN_WIDTH)].fill('.')
)

const printScreen = () => screen.forEach((line) => console.log(line.join('')))
const parseLine = ([a, b]: string[]): [string, number] => [a, +b]

const tick = (): void => {
    const prevCycle = cycle - 1
    const row = Math.floor(prevCycle / 40)
    const col = prevCycle % 40
    // Sprite is 3px ###. X register represents middle one.
    // We are checking to see if pos is either in the middle, left or right otherwise, it's blank
    const isPartOfSprite = Math.abs(x - col) <= 1
    screen[row][col] = isPartOfSprite ? '#' : '.'
}

input.forEach((line) => {
    const [instruction, value] = parseLine(line.split(' '))
    if (instruction === 'noop') {
        cycle++
        tick()
        return
    }
    if (instruction === 'addx') {
        cycle++
        tick()
        cycle++
        tick()
        x += value
    }
})

printScreen()
