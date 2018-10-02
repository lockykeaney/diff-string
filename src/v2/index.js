import diffObjects from './diffObjects'
// import isEmpty from './isEmpty'
// import updateString from './updateString'

export default functionChain = (oldObject, newObject) => {
    diffObjects(oldObject, newObject)
        .then(data => {
            return data.json()
            // console.log(data.json())
        })
        .then(data => {
            console.log(data)
            // isEmpty(data)
        })
        .catch(err => console.log(err))
}


