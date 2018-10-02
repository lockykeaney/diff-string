import isEmpty from './isEmpty'

export default diffObjects = (oldObject, newObject) => {
    let diff = Object.keys(newObject).reduce((diff, key) => {
        if (oldObject[key] === newObject[key]) {
            return diff
        }
        return {
            ...diff,
            [key]: newObject[key]
        }
    }, {})

    return isEmpty(diff)
}
