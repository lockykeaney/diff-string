import { assert } from 'chai'
import diffObjects from '../src'
import isEmpty from '../src'

describe('Test the difference in the objects', () => {
    it('return false if both objects match', () => {
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
        assert(diffObjects(obj1, obj2) === false, 'Objects Match');
    })

    it('return a string of the differences in the object', () => {
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
            jobs: 3
        }
        assert(diffObjects(obj1, obj2) === 'name: "Steve", available: true', 'String is returned');
    })
})

// describe('Check if the difference object is empty or not', () => {
//     it('returns false if the object is empty' ,() => {
//         const value = {}
//         assert(isEmpty(value) === false, 'Boolean value returned for empty object')
//     })
//     it('returns ')
// })