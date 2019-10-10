module.exports = function map(list, iterate) 
{
    let arr = []

    for(const [key, value] of Object.entries(list)) {
        arr.push(iterate(value))
    }
    //newObj.firstname = "arun"
    return arr
}