import { readFileSync } from 'fs'

const lines = readFileSync('./input.txt', 'utf-8').trim().split('\n')

type Size = {
    [key: string]: number
}

const sizes: Size = {}
const path: string[] = []

const cd = (dir: string): void => {
    if (dir === '..') {
        path.pop()
        return
    }
    path.push(dir)
}

for (const line of lines) {
    const words = line.split(' ')
    if (words[1] === 'ls' || words[0] === 'dir') continue
    if (words[1] === 'cd') {
        cd(words[2])
        continue
    }
    const size: number = +words[0]
    path.forEach((dir, index) => {
        const key = path.slice(0, index + 1).join('.')
        if (!sizes[key]) sizes[key] = 0
        sizes[key] += size
    })
}

const sum = Object.keys(sizes).reduce((total: number, key: string) => {
    if (sizes[key] <= 100000) return total + sizes[key]
    return total
}, 0)

console.log(sizes)
console.log(sum)
