import { readFileSync } from 'fs'

const lines = readFileSync('./input.txt', 'utf-8').trim().split('\n')

type Size = {
    [key: string]: number
}

const maxSize: number = 70000000
const spaceNeededForUpdate: number = 30000000
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

console.log(sizes)

const unusedSpace = maxSize - sizes['/']
const spaceNeeded = spaceNeededForUpdate - unusedSpace
const candidates = Object.values(sizes).filter((val) => val > spaceNeeded)
const [dirToDelete] = candidates.sort((a, b) => a - b)
console.log(dirToDelete)
