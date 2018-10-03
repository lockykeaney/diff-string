import diffObjects from './src'

const obj1 = {
    name: 'Mark',
    role: 'Builder',
    available: false,
    jobs: 3
}

const obj2 = {
    name: 'Steve',
    role: 'Builder',
    available: true,
    jobs: 2
}


const output = diffObjects(obj1, obj2)
console.log(output)