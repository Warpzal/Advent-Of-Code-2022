import { readFileSync } from 'fs'
const datastreamBuffer: string[] = readFileSync('./input.txt', 'utf-8').split(
    ''
)

const getFirstMarker = (buffer: string[]): number => {
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
