const { readFileSync } = require('fs')

const input = readFileSync('./input.txt', 'utf-8')
    .split(',')
    .map((x) => x.split('\n'))
    .flat()

const solve = () => {
    const visited = {}
    input.forEach((task) => {
        const [low, high] = task.split('-')
        for (let i = +low; i <= +high; i++) {
            if (!visited[i]) {
                visited[i] = 1
                continue
            }
            visited[i]++
        }
    })
    console.log(visited)
}

solve()
