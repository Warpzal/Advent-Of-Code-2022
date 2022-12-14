import { readFileSync } from 'fs'

const isNumber = (a) => typeof a === 'number'

const compare = (left, right) => {
    if (isNumber(left) && isNumber(right)) return left - right
    if (isNumber(left) && !isNumber(right)) return compare([left], right)
    if (!isNumber(left) && isNumber(right)) return compare(left, [right])

    const repetitions = Math.min(left.length, right.length)

    for (let i = 0; i < repetitions; i++) {
        const result = compare(left[i], right[i])
        if (result !== 0) return result
    }

    return left.length - right.length
}

const part1 = (): number => {
    const pairs: any = readFileSync('./input.txt', 'utf-8')
        .split('\n\n')
        .map((pair) => pair.split('\n').map((line) => JSON.parse(line)))
    const comparisons = pairs.map(([a, b]) => compare(a, b))
    return comparisons.reduce(
        (acc, curr, index) => (curr < 0 ? acc + (index + 1) : acc),
        0
    )
}

const part2 = (): any => {
    const dividers = [[[2]], [[6]]]
    const input = [
        ...readFileSync('./input.txt', 'utf-8')
            .replace(/\n\n/g, '\n')
            .split('\n')
            .map((line) => JSON.parse(line)),
        ...dividers,
    ]
    input.sort((a, b) => compare(a, b))
    const a = input.indexOf(dividers[0]) + 1
    const b = input.indexOf(dividers[1]) + 1
    return a * b
}

console.log(part1())
console.table(part2())
