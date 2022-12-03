const { readFileSync } = require('fs')
const rucksacks = readFileSync('./input.txt', 'utf-8').split('\n')
const elves = []
for (let i = 0; i < rucksacks.length; i += 3) {
    elves.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]])
}

const getSharedItems = (a, b, c) => {
    const letters = {}
    a.forEach((letter) => {
        if (!letters[letter]) {
            letters[letter] = 1
            return
        }
        letters[letter]++
    })

    b.forEach((letter) => {
        if (!letters[letter]) {
            letters[letter] = 1
            return
        }
        letters[letter]++
    })

    c.forEach((letter) => {
        if (!letters[letter]) {
            letters[letter] = 1
            return
        }
        letters[letter]++
    })

    for (key in letters) {
        if (letters[key] === 3) return key
    }
}

let key = ''
for (let i = 0; i < elves.length; i++) {
    const elf_1 = [...new Set(elves[i][0])]
    const elf_2 = [...new Set(elves[i][1])]
    const elf_3 = [...new Set(elves[i][2])]
    key += getSharedItems(elf_1, elf_2, elf_3)
}

console.log(key)

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const az = [...alphabet, ...alphabet2]

const sum = [...key].reduce((acc, val) => {
    return acc + az.indexOf(val) + 1
}, 0)
console.log(sum)
