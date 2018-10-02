import functionChain from './src'

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


const chain = functionChain(obj1, obj2)
console.log(chain)