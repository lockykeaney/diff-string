const diffs = require('./src')

const obj1 = {
    name: 'Mark',
    role: 'Builder',
    available: false,
    jobs: 3
}

const obj2 = {
    name: 'Mark',
    role: 'Builder',
    available: false,
    jobs: 3
}

const x = diffs(obj1, obj2)

console.log(x)