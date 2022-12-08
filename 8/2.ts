import { readFileSync } from 'fs'

const input: string[] = readFileSync('./input.txt', 'utf-8').split('\n')
const rows: number = input.length
const cols: number = input[0].length

const isOnEdge = (row: number, col: number): boolean => {
    if (col === 0 || row === 0) return true
    if (col === cols - 1 || row === rows - 1) return true
    return false
}

const getRowArr = (row: number): number[] => {
    const arr: number[] = []
    for (let i = 0; i < rows; i++) {
        arr.push(+input[row][i])
    }
    return arr
}

const getColArr = (col: number): number[] => {
    const arr: number[] = []
    for (let i = 0; i < cols; i++) {
        arr.push(+input[i][col])
    }
    return arr
}

const getVisibleCountLeft = (row: number, col: number): number => {
    let count = 1
    const arr: number[] = getRowArr(row).slice(0, col)
    const length: number = arr.length
    while ((arr.pop() ?? 10000) < +input[row][col]) {
        count++
    }
    if (count > length) count = length
    return count
}

const getVisibleCountTop = (row: number, col: number): number => {
    let count = 1
    const arr: number[] = getColArr(col).slice(0, row)
    const length: number = arr.length
    while ((arr.pop() ?? 10000) < +input[row][col]) {
        count++
    }
    if (count > length) count = length
    return count
}

const getVisibleCountRight = (row: number, col: number): number => {
    let count = 1
    const rowArr = getRowArr(row)
    const arr: number[] = rowArr.slice(col + 1, rowArr.length)
    const length: number = arr.length
    while ((arr.shift() ?? 10000) < +input[row][col]) {
        count++
    }
    if (count > length) count = length
    return count
}

const getVisibleCountBottom = (row: number, col: number): number => {
    let count = 1
    const colArr = getColArr(col)
    const arr: number[] = colArr.slice(row + 1, colArr.length)
    const length: number = arr.length
    while ((arr.shift() ?? 10000) < +input[row][col]) {
        count++
    }
    if (count > length) count = length
    return count
}

const solve = (): number => {
    let highScore: number = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (isOnEdge(i, j)) continue
            const a = getVisibleCountBottom(i, j)
            const b = getVisibleCountTop(i, j)
            const c = getVisibleCountLeft(i, j)
            const d = getVisibleCountRight(i, j)
            const score = a * b * c * d
            if (score > highScore) highScore = score
        }
    }
    return highScore
}

console.log(solve())
