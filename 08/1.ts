import { readFileSync } from 'fs'

const input: string[] = readFileSync('./input.txt', 'utf-8').split('\n')
const rows: number = input.length
const cols: number = input[0].length

const getPerimeter = (rows: number, cols: number): number => {
    return cols * 2 + (rows * 2 - 4)
}

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

const isVisible = (arr: number[], index: number): boolean => {
    const left = arr.slice(0, index)
    const right = arr.slice(index + 1, arr.length)
    return (
        left.every((val: number, i: number): boolean => {
            if (val < arr[index]) return true
            return false
        }) ||
        right.every((val: number, i: number): boolean => {
            if (val < arr[index]) return true
            return false
        })
    )
}

const solve = (): number => {
    let seenTrees: number = getPerimeter(rows, cols)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (isOnEdge(i, j)) continue
            if (isVisible(getRowArr(i), j) || isVisible(getColArr(j), i)) {
                seenTrees++
            }
        }
    }
    return seenTrees
}

console.log(solve())
