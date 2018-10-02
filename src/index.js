console.log('Mutation String Generator')

const diffObjects = (oldObject, newObject) => {
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

const updateString = (obj) => {

    let array = []
    
    Object.entries(obj).forEach((item) => {
        if (item[0] !== 'id') {
            if (Array.isArray(item[1])) {
                array.push(`${item[0]}: ${JSON.stringify(item[1])}`)
            } else if (typeof item[1] === 'boolean') {
                array.push(`${item[0]}: ${item[1]}`)
            } else {
                array.push(`${item[0]}: "${item[1]}"`)
            }
        }
    })

    let mutationString = array.join(", ")

    return mutationString
}

const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return updateString(obj);
    }
    return false;
}

module.exports = diffObjects