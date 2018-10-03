console.log('diff objects loaded')
export default diffObjects = (oldObject, newObject) => {
    console.log('inside')
    return new Promise((resolve, reject) => {
        let diff = Object.keys(newObject).reduce((diff, key) => {
            
            if (oldObject[key] === newObject[key]) {
                return false
            }
            return { ...diff, [key]: newObject[key] }
        }, {})
        //Outside the function
        resolve(diff)
    })
    
}