module.exports = function invert(obj) 
{
    let newObj = {}
    let arr = []
    for(const [key, value] of Object.entries(obj)) {
        newObj [value] = key
    }
    //newObj.firstname = "arun"
    return newObj
}