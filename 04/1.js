const { readFileSync } = require('fs')

const input = readFileSync('./input.txt', 'utf-8').split('\n')
const solve = () => {
    let count = 0
    input.forEach((tasks) => {
        const [elf1_tasks, elf2_tasks] = tasks.split(',')
        const [elf1_low, elf1_high] = elf1_tasks.split('-').map((num) => +num)
        const [elf2_low, elf2_high] = elf2_tasks.split('-').map((num) => +num)
        if (elf1_high >= elf2_high && elf1_low <= elf2_low) {
            count++
            console.log(tasks)
        } else if (elf2_high >= elf1_high && elf2_low <= elf1_low) {
            count++
            console.log(tasks)
        }
    })
    console.log(count)
}

solve()
