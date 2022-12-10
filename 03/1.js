const { readFileSync } = require('fs')
const rucksacks = readFileSync('./input.txt', 'utf-8').split('\n')

const getSharedItem = (a, b) => {
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

    for (key in letters) {
        if (letters[key] === 2) return key
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const az = [...alphabet, ...alphabet2]

let key = ''
rucksacks.forEach((rucksack) => {
    const pivot = rucksack.length / 2
    const compartment1 = rucksack.slice(0, pivot)
    const compartment2 = rucksack.slice(pivot, rucksack.length)
    const compartment1_unique = [...new Set(compartment1)]
    const compartment2_unique = [...new Set(compartment2)]
    key += getSharedItem(compartment1_unique, compartment2_unique)
})
console.log(key)
const sum = [...key].reduce((acc, val) => {
    return acc + az.indexOf(val) + 1
}, 0)
console.log(sum)
