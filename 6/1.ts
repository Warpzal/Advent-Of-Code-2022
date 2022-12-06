import { readFileSync } from 'fs'
const datastreamBuffer: string = readFileSync('./input.txt', 'utf-8')

const getFirstMarker = (buffer: string): number => {
    // Part 1: 4
    // Part 2: 14
    const uniqueChars = 14
    for (let i = uniqueChars; i < buffer.length - uniqueChars + 1; i++) {
        const start = i - uniqueChars
        const subset = buffer.slice(start, start + uniqueChars)
        const set = new Set(subset)
        if (set.size >= uniqueChars) return i
    }
    return 0
}

console.log(getFirstMarker(datastreamBuffer))
