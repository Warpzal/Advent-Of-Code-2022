const { readFileSync } = require('fs')
const rucksacks = readFileSync('./input.txt', 'utf-8').split('\n')

const getSharedItems = (elves) => {
    const letters = {}
    for (const elf of elves) {
        for (const letter of elf) {
            if (!letters[letter]) {
                letters[letter] = 1
                continue
            }
            letters[letter]++
        }
    }
    for (const key in letters) {
        if (letters[key] === elves.length) return key
    }
}

const elves = []
// Parse lines into groups of 3 [[1,2,3], [1,2,3]]
for (let i = 0; i < rucksacks.length; i += 3) {
    elves.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]])
}

let key = ''
for (let i = 0; i < elves.length; i++) {
    const elf_1 = [...new Set(elves[i][0])]
    const elf_2 = [...new Set(elves[i][1])]
    const elf_3 = [...new Set(elves[i][2])]
    key += getSharedItems([elf_1, elf_2, elf_3])
}

const az = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']
const sum = [...key].reduce((acc, val) => {
    return acc + az.indexOf(val) + 1
}, 0)

console.log(sum)
