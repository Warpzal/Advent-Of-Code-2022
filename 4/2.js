const { readFileSync } = require('fs')

const input = readFileSync('./input.txt', 'utf-8').split('\n')
const solve = () => {
    let count = 0
    input.forEach((tasks) => {
        const visited = {}
        const [elf1_tasks, elf2_tasks] = tasks.split(',')
        const [elf1_low, elf1_high] = elf1_tasks.split('-').map((num) => +num)
        const [elf2_low, elf2_high] = elf2_tasks.split('-').map((num) => +num)

        for (let i = elf1_low; i <= elf1_high; i++) {
            if (visited[i]) {
                visited[i] = 1
                continue
            }
            visited[i]++
        }

        for (let i = elf2_low; i <= elf2_high; i++) {
            if (!visited[i]) {
                visited[i] = 1
                continue
            }
            visited[i]++
        }
        for (const key in visited) {
            if (visited[key] > 1) {
                count++
                return
            }
        }
        console.log(visited)
    })

    console.log(count)
}

solve()
