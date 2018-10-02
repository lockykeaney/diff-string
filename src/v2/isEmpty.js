import updateString from './updateString'

export default isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return obj;
    }
    return false;
}
